json.partial! '/api/beers/beer', beer: @beer
json.brewery do
  json.partial! '/api/breweries/brewery', brewery: @beer.brewery
end
json.checkins do
  @beer.checkins.each do |checkin|
    json.set! checkin.id do
      json.partial! '/api/checkins/checkin', checkin: checkin
    end
  end
end
