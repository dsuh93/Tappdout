json.partial! 'api/breweries/brewery', brewery: @brewery
json.beers do
  @brewery.beers.each do |beer|
    json.set! beer.id do
      json.partial! '/api/beers/beer', beer: beer
    end
  end
end
json.checkins do
  @brewery.beer_checkins.each do |checkin|
    json.set! checkin.id do
      json.partial! '/api/checkins/checkin', checkin: checkin
      json.user do
        json.partial! '/api/users/user', user: checkin.user
      end
    end
  end
end