# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# require 'json'

# file = File.read('breweries.json')
# data_hash = JSON.parse(file)
# p data_hash

require 'faker'

User.destroy_all
Brewery.destroy_all
Beer.destroy_all

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

# brewery1
Beer.create!(
  beer_name: "Apocalypse IPA",
  brewery_id: brewery1.id,
  abv: 6.8,
  ibu: 70,
  style: "IPA",
  description: "Balanced Hop Forward Flavor"
)
Beer.create!(
  beer_name: "Joe IPA",
  brewery_id: brewery1.id,
  abv: 6.9,
  ibu: 70,
  style: "IPA",
  description: "Bright Citrusy Flavor"
)
Beer.create!(
  beer_name: "Profuse IPA",
  brewery_id: brewery1.id,
  abv: 6.5,
  ibu: 70,
  style: "IPA",
  description: "Juicy Hop Flavor"
)
Beer.create!(
  beer_name: "Nature Calls",
  brewery_id: brewery1.id,
  abv: 6.5,
  ibu: 55,
  style: "IPA",
  description: "Smooth profile of mango, tangerine, and grapefruit"
)
Beer.create!(
  beer_name: "Pub Beer",
  brewery_id: brewery1.id,
  abv: 5,
  ibu: 18,
  style: "IPA",
  description: "Pear Character"
)

# brewery2
Beer.create!(
  beer_name: "101 North Heroine IPA",
  brewery_id: brewery2.id,
  abv: 7.2,
  style: "IPA",
  description: "Immodest hop additions throughout the brewing process characterize this distinctive, amber colored NorCal fashioned India Pale Ale."
)
Beer.create!(
  beer_name: "101 Lookout Stout",
  brewery_id: brewery2.id,
  abv: 6,
  style: "Stout",
  description: "Pitch black beer with a tan head, a bit syrupy with a burnt bitter chocolate flavor and lots of roasted grain."
)
Beer.create!(
  beer_name: "101 Pecker Pole Pale Ale",
  brewery_id: brewery2.id,
  abv: 5.6,
  style: "English Pale Ale",
  description: "Classic Ale that is pleasantly hoppy, very easy to drink and our most popular!"
)
Beer.create!(
  beer_name: "Heroine India Pale Ale",
  brewery_id: brewery2.id,
  abv: 7.2,
  style: "IPA",
  description: "Immodest hop additions throughout the brewing process characterize this distinctive, amber colored NorCal fashioned India Pale Ale."
)
Beer.create!(
  beer_name: "Hook Tender Honey Brown Ale",
  brewery_id: brewery2.id,
  abv: 5.5,
  style: "Brown Ale",
  description: "Caramelly and Roasty but smooth and with the floral flavor of honey. Quite yummy and full or grain flavor."
)

# brewery3
Beer.create!(
  beer_name: "Boss Pour IPA",
  brewery_id: brewery3.id,
  abv: 7.0,
  ibu: 55,
  style: "San Diego IPA",
  description: "A soft bitterness from the Nugget and Cascade hops make this is a classic IPA."
)
Beer.create!(
  beer_name: "Hazy Dreams",
  brewery_id: brewery3.id,
  abv: 6.9,
  ibu: 30,
  style: "Hazy IPA",
  description: "The aggressively hop forward nose, provided by Nugget and Mosaic, is followed by waves of citrus and tropical fruits from Cascade and Citra."
)
Beer.create!(
  beer_name: "Secret Safari",
  brewery_id: brewery3.id,
  abv: 5.0,
  ibu: 30,
  style: "San Diego IPA",
  description: "Citrus and tropical fruits dominate, but dont leave the slight bready malt flavor behind, while its crispness keeps you wanting another sip."
)
Beer.create!(
  beer_name: "Tiki Life for Me",
  brewery_id: brewery3.id,
  abv: 5.8,
  ibu: 10,
  style: "Island Cocktail Wheat Ale",
  description: " Inspired by classic tiki cocktails we used some classic components like pineapple, coconut and almond. "
)
Beer.create!(
  beer_name: "Mocha Stout",
  brewery_id: brewery3.id,
  abv: 7.0,
  ibu: 55,
  style: "Sweet Stout",
  description: "This luscious year-round coffee stout is made with beans from a local San Diego coffee roaster. We then add a healthy dose of cacao nibs creating velvety chocolate notes that compliment the subtle roastiness from dark malts and coffee beans."
)

# brewery4
Beer.create!(
  beer_name: "Shipwrecked On Sour Island",
  brewery_id: brewery4.id,
  abv: 4.3,
  style: "kettle sour",
  description: "Island inspired kettle sour with Pineapple & Coconut."
)
Beer.create!(
  beer_name: "Pineapple Buck Up",
  brewery_id: brewery4.id,
  abv: 4.7,
  style: "German-style ale",
  description: "German-style ale matured on real pineapple puree."
)
Beer.create!(
  beer_name: "Oatie Oats",
  brewery_id: brewery4.id,
  abv: 5.7,
  style: "American IPA",
  description: "American IPA brewed with oats. Hopped intensely with Amarillo, Citra and Mosaic."
)
Beer.create!(
  beer_name: "BuckUp",
  brewery_id: brewery4.id,
  abv: 4.7,
  style: "German-style ale",
  description: "Delicate malt character, herbal hops, effervescent & quenching."
)
Beer.create!(
  beer_name: "THANK YOU!",
  brewery_id: brewery4.id,
  abv: 6.6,
  style: "Hazy IPA",
  description: "Simcoe single-hopped hazy IPA brewed."
)

# brewery5
Beer.create!(
  beer_name: "Danville IPA",
  brewery_id: brewery5.id,
  abv: 6.2,
  style: "IPA",
  description: "Resinous pine and grapefruit from Northwest hops, crisp and clean."
)
Beer.create!(
  beer_name: "925 Blonde",
  brewery_id: brewery5.id,
  abv: 5.5,
  style: "Blonde",
  description: "Delicate flavors of melon, and strawberry aroma, soft bitterness."
)
Beer.create!(
  beer_name: "Chux Double IPA",
  brewery_id: brewery5.id,
  abv: 8,
  style: "Double IPA",
  description: "Citrusy-tropical hop aromas, soft malt sweetness."
)
Beer.create!(
  beer_name: "Hop Magee IPA",
  brewery_id: brewery5.id,
  abv: 7.4,
  style: "North East IPA",
  description: "North East style IPA, juicy, soft, hazy."
)
Beer.create!(
  beer_name: "Station 31",
  brewery_id: brewery5.id,
  abv: 5,
  style: "German",
  description: "German lager, bold malt and light smoke."
)


