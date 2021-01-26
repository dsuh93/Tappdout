class Api::CheckinsController < ApplicationController
  def index
    @checkins = Checkin.all
    render :index
  end

  def show
    @checkin = Checkin.find_by(id: params[:id])
    render :show
  end

  def create
    @checkin = Checkin.new(checkin_params)

    if @checkin.save!
      render :show
    else
      render json: @checkin.errors.full_messages, status: 422
    end
  end

  def delete
    @checkin = Checkin.find_by(id: params[:id])
    if @checkin && @checkin.destroy
      render json: { message: "check-in was deleted"}
    end
  end

  private
  def checkin_params
    params.require(:checkin).permit(:rating, :description, :user_id, :beer_id)
  end
end
