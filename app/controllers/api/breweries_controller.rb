class Api::BreweriesController < ApplicationController
  def index
    breweries = params[:search] ? Brewery.search_breweries(params[:search]) : Brewery.all
    # @breweries = Brewery.all
    @breweries = breweries
    render :index 
  end

  def show
    @brewery = Brewery.find_by(id: params[:id])
    if @brewery
      render :show
    else
      render json: ["Sorry, brewery doesn't exist"], status: 422
    end
  end
end
