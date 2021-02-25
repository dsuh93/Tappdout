class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      redirect_to api_checkin_url(@comment.checkin_id)
    else
      render @comment.errors.full_messages, status: 422
    end
  end

  def update
    @comment = Comment.find_by(id: params[:id])
    if @comment.update(comment_params)
      render :show
    else
      render @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find_by(id: params[:id])
    @comment.destroy
    render json: @comment
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :author_id, :checkin_id)
  end
end
