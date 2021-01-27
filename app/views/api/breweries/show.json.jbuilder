json.partial! 'api/breweries/brewery', brewery: @brewery
json.beers do
  @brewery.beers.each do |beer|
    json.partial! '/api/beers/beer', beer: beer
  end
end
# json.checkins do
#   @brewery.beer_checkins.each do |checkin|
#     json.partial! '/api/checkins/checkin' checkin: checkin
#   end
# end