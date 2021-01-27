@checkins.each do |checkin|
  json.partial! '/api/checkins/checkin', checkin: checkin
  json.user do
    json.partial! '/api/users/user', user: checkin.user
  end
  json.beer do
    json.partial! '/api/beers/beer', beer: checkin.beer
  end
end