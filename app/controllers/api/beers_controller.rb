class Api::BeersController < ApplicationController
  def index
    @beers = Beer.all
    render :index 
  end
  
  def show
    @beer = Beer.find_by(id: params[:id])
    if @beer 
      render :show
    else
      render json: ["Beer not found"], status: 401
    end
  end
  
  def create
    @beer = Beer.new(beer_params)
    if @beer.save
  end
  
end
