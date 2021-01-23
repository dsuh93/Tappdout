@beers.each do |beer|
  json.set! beer.id do
    json.extract! beer, :beer_name, :brewery_id, :abv, :ibu, :style, :description
  end
end