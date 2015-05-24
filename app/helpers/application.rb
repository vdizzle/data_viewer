module Helpers
  module Application
    def user_logged_in?
      !session['login_ticket'].nil? && !session['current_user_id'].nil?
    end

    def current_user
      session['current_user_id'] || ''
    end
  end
end
