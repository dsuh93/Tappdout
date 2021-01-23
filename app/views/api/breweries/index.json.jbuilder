@breweries.each do |brewery|
  json.set! brewery.id do
    json.extract! brewery, :brewery_name, :brewery_type, :location, :id
  end
end