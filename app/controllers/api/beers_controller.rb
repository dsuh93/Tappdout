class Api::BeersController < ApplicationController
  def index
    @beers = Beer.all
    render :index 
  end
  
  def show
    @beer = Beer.includes(:brewery).find_by(id: params[:id])
    if @beer 
      render :show
    else
      render json: ["Beer not found"], status: 404
    end
  end
  
  def create
    @beer = Beer.new(beer_params)
    if @beer.save
      render :show 
    else
      render json: @beer.errors.full_messages, status: 422
    end
  end

  def update
    @beer = Beer.find_by(id: params[:id])
    if @beer.update(beer_params)
      render :show
    else
      render json: @beer.errors.full_messages, status: 422
    end
  end

  def destroy
    @beer = Beer.find_by(id: params[:id])
    @beer.destroy 
  end


  private
  def beer_params
    params.require(:beer).permit(:beer_name, :brewery_id, :abv, :ibu, :style, :description)
  end

  
end
