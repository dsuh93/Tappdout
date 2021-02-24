class Api::ToastsController < ApplicationController
  def create
    @toast = Toast.new(toast_params)
    if @toast.save
      redirect_to api_checkin_url(@toast.checkin_id)
    else
      render @toast.errors.full_messages, status: 422
    end
  end

  def destroy
    @toast = Toast.find_by(id: params[:id])
    @toast.destroy
    render json: @toast 
  end

  private
  def toast_params
    params.require(:toast).permit(:toaster_id, :checkin_id)
  end

end
