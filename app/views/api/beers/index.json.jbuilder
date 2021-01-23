@beers.each do |beer|
  json.set! beer.id do
    json.partial! 'api/beers/beer', beer: beer
    json.brewery_name beer.brewery.brewery_name
  end
end