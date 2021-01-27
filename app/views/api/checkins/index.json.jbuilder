@checkins.each do |checkin|
  json.set! checkin.id do
    json.partial! '/api/checkins/checkin', checkin: checkin
    json.user do
      json.partial! '/api/users/user', user: checkin.user
    end
    json.beer do
      json.partial! '/api/beers/beer', beer: checkin.beer
    end
    json.brewery checkin.beer.brewery.brewery_name
  end
end