@breweries.each do |brewery|
  json.set! brewery.id do
    json.partial! 'api/breweries/brewery', brewery: brewery
    json.beers do
      brewery.beers.each do |beer|
        json.set! beer.id do
          json.partial! '/api/beers/beer', beer: beer
        end
      end
    end
    json.checkins do
      brewery.beer_checkins.each do |checkin|
        json.set! checkin.id do
          json.partial! '/api/checkins/checkin', checkin: checkin
        end
      end
    end
  end
end

