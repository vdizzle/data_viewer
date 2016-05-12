$LOAD_PATH.unshift File.expand_path(File.dirname(__FILE__))

require 'boot'
require 'app/extensions'
require 'app/helpers'

module DataViewer
  class App < Sinatra::Base
    set :root, File.dirname(__FILE__)

    configure :production, :staging do
    end

    error Sinatra::NotFound do
      halt 404
    end

    configure do
      set :root, ENV['APP_ROOT']
      set :envronment, ENV['RACK_ENV']
      set :views, ['app/views']
      set :public_dir, 'dist'
      enable :sessions
    end

    helpers Helpers::Application
    helpers Extensions::ProxyRoutes::Helpers

    register Extensions::ProxyRoutes

    helpers do
      def stylesheet_link(path)
        %{<link href="#{path}" rel="stylesheet" type="text/css" media="screen">}.html_safe
      end

      def javascript_tag(path)
        %{<script src="#{path}"></script>}.html_safe
      end
    end

    get '/' do
      if user_logged_in?
        erb :'index.html'
      else
        erb :'no_session_index.html'
      end
    end

    post '/auth/login' do
      response = JSON.parse(proxy_to_data_store)
      unless response['session_id'].empty?
        session['login_ticket'] = response['session_id']
        session['current_user_id'] = response['current_user_id']
        redirect to('/')
      end
    end

    get '/login' do
      if user_logged_in?
        redirect to('/')
      else
        erb :'login.html'
      end
    end

    get '/logout' do
      session['login_ticket'] = nil
      session['current_user_id'] = nil
      redirect to ('/')
    end
  end
end
