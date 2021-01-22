class Api::UsersController < ApplicationController
  before_action :ensure_logged_in, only: [:show]

  def create
    # if params[:password] != params[:repeat]
    #   render json: ['Password do not match. Please try again'], status: 401
    # elsif params[:password] == params[:repeat]
    #   @user = User.new(user_params)
    #   if @user.save
    #     login!(@user)
    #     render :show
    #   else
    #     render json: @user.errors.full_messages, status: 401
    #   end
    # end
    

    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    render :show 
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :email, :first_name, :last_name)
  end
end


# .except(:repeat) figure out whether i can use this for remove the repeate password from the params