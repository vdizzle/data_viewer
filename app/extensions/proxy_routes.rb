module Extensions
  module ProxyRoutes
    module Helpers
      def proxy_to_data_store
        method = request.request_method.downcase.to_sym
        url = request.path.sub(%r{^/api/data-store/}, '')
        params = request.params
        params.merge!(user_id: session[:current_user_id])

        if params['file']
          params['file'][:tempfile] = params['file'][:tempfile].path
        end

        if request.body.respond_to?(:read)
          begin
            body = request.body.read
            params.merge!(Rack::Utils.parse_nested_query(body)) unless body.empty?
          rescue JSON::ParserError
          end
        end

        response = DataStoreClient::Api.request_raw(method, url, params)

        content_type 'application/json'
        status response.code
        body response.body
      end
    end

    def self.any(app, url, &block)
      %w(get post put delete).each do |verb|
        app.send(verb, url, &block)
      end
    end

    def self.registered(app)
      app.helpers Extensions::ProxyRoutes::Helpers

      any app, '/api/data-store/*' do
        proxy_to_data_store 
      end
    end
  end
end
