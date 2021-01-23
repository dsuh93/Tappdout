# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# require 'faker'
# require 'json'

# file = File.read('breweries.json')
# data_hash = JSON.parse(file)


User.destroy_all
Brewery.destroy_all
# Beer.destroy_all

demo_user = User.create!(
  username: "guest",
  password: "password",
  first_name: "Guest",
  last_name: "User",
  email: "guest@email.com"
)

brewery1 = Brewery.create!(
  brewery_name: "10 Barrel Brewing Co.",
  brewery_type: "Macro Brewery",
  location: "San Diego, California"
)
brewery2 = Brewery.create!(
  brewery_name: "101 North Brewing Company",
  brewery_type: "Micro Brewery",
  location: "Petaluma, California"
)
brewery3 = Brewery.create!(
  brewery_name: "Abnormal Beer Company",
  brewery_type: "Nano Brewery",
  location: "San Diego, California"
)
brewery4 = Brewery.create!(
  brewery_name: "Brewery Twenty Five",
  brewery_type: "Home Brewery",
  location: "Hollister, California"
)
brewery5 = Brewery.create!(
  brewery_name: "Danville Brewing Company",
  brewery_type: "Brew Pub",
  location: "Danville, California"
)



# beer = Beer.create!(
#   beer_name: Faker::Beer.name,
#   brewery_id: rand(10),
#   abv: Faker::Beer.alcohol,
#   ibu: Faker::Beer.ibu,
#   style: Faker::Beer.style,
#   description: Faker::Beer.brand
# )

