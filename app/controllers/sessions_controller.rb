class SessionsController < ApplicationController
  #https://www.railstutorial.org/book/log_in_log_out

  skip_before_filter :authorize

  def new
    redirect_to extensions_dashboard_path if logged_in?
  end

  def create
    user = User.find_by(email: params[:session][:email].downcase)
    if user && user.authenticate(params[:session][:password])
      log_in user
      redirect_to extensions_dashboard_path #TODO: fix redirect after login
    else
      # flash[:danger] = 'Invalid email/password combination' # Not quite right!
      render 'new'
    end
  end

  def destroy
    logout
    redirect_to login_path
  end
end
