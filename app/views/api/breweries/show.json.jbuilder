json.partial! 'api/breweries/brewery', brewery: @brewery
json.beers do
  json.array! (@brewery.beers.map { |beer| beer.id })
end
