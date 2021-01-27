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



User.destroy_all
Brewery.destroy_all
Beer.destroy_all
Checkin.destroy_all

demo_user = User.create!(
  username: "guest",
  password: "password",
  first_name: "Guest",
  last_name: "User",
  email: "guest@email.com"
)

user1 = User.create!(
  username: "Strongest Avenger",
  password: "strongestavenger",
  first_name: "Thor",
  last_name: "Odinson",
  email: "godofthunder@gmail.com"
)
user2 = User.create!(
  username: "Duke Silver",
  password: "peopleareidiots",
  first_name: "Ron",
  last_name: "Swanson",
  email: "holdmybeer@gmail.com"
)

brewery1 = Brewery.create!(
  brewery_name: "10 Barrel Brewing Co.",
  brewery_type: "Macro Brewery",
  location: "San Diego, California",
  description: "Started production brewery in Bend, Oregon in 2006. Opened distribution and brewpub in the following two years. After opening a new production brewery in 2011, 10 Barrel Brewing Company was able to open officially in 2013 in Boise, Idaho. Started a partnership with Anheuser-Busch to become a member of the High End and their family of craft brands.",
  web_url: "https://10barrel.com/",
  fb_url: "https://www.facebook.com/10BarrelBrewingDenver/",
  insta_url: "https://www.instagram.com/10barrelbrewing/"
)
brewery2 = Brewery.create!(
  brewery_name: "101 North Brewing Company",
  brewery_type: "Micro Brewery",
  location: "Petaluma, California",
  description: "101 North Brewing Company, A Petaluna based craft brewery has built a signficant following among craft beer enthusiasts through their exceptional brews, unique packaging and innovative marketing techniques. The brewery was founded in September 2012 by a group of former Bear Republic employees, including brewmaster Joel Johnson.",
  web_url: "https://www.brewerydb.com/brewery/IPhAuu",
  fb_url: "https://www.facebook.com/101northbrewingco/",
  insta_url: "https://www.instagram.com/101northbrewing/?hl=en"
)
brewery3 = Brewery.create!(
  brewery_name: "Abnormal Beer Company",
  brewery_type: "Nano Brewery",
  location: "San Diego, California",
  description: "As San Diego's first and only Brewery/Winery/Restaurant, we pride ourselves on putting everything we have into the things we do and push the boundaries of creative products to share with our guests. Our beers are focused on drinkability, merging inspirational flavors from our restaurant and winery to create one of a kind products. Our tasting room is attached to our restaurant, The Cork and Craft. We're normally open every day except for Monday, including lunch during the work week, and brunch on Sundays. Come in for the beer, stay for the food, and discover your Abnormal side.",
  web_url: "https://abnormalbeer.co/",
  fb_url: "https://www.facebook.com/AbnormalBeerCo/",
  insta_url: "https://www.instagram.com/abnormalbeerco/?hl=en"
)
brewery4 = Brewery.create!(
  brewery_name: "Brewery Twenty Five",
  brewery_type: "Home Brewery",
  location: "Hollister, California",
  description: "Brewery Twenty Five is a 7bbl(200gal) brewery based in San Benito County. Our TapRoom is in Downtown San Juan Bautista Open Friday & Saturday! Thanks for following us as we begin our new endeavor. Brewery Twenty Five will focus on handcrafted beers that will utilize locally-sourced ingredients whenever possible.",
  web_url: "https://shop.brewerytwentyfive.com/",
  fb_url: "https://www.facebook.com/brewerytwentyfive/",
  insta_url: "https://www.instagram.com/brewerytwentyfive/?hl=en"
)
brewery5 = Brewery.create!(
  brewery_name: "Danville Brewing Company",
  brewery_type: "Brew Pub",
  location: "Danville, California",
  description: "The Maita family has been in the beer business since shortly after prohibition; distributing and working with some of the best breweries in the world. When a great spot became available in historic downtown Danville we thought, perfect location for a brewery! So the process began. In order to make this place extra spectacular, the Maitas partnered with general and managing partner of local favorites Bridges and the Vine, Randy Negi. We knew this alliance would ensure we compliment great craft beer with incredible food. Put our passions together, and a fun spot called Danville Brewing Co. is born. Our head brewer, Matt Sager is a UC Davis Master Brewers program graduate and has been an award winning brewer for 20 years. Matt has engineered some worthy brews and he's always eager to talk shop, so when you see him on site or any of us around, feel free to say hi. We look forward to welcoming all of our friends, family, and new friends to be made to the locally owned and operated DBC. Cheers!!",
  web_url: "http://www.danvillebrewing.com/about.html",
  fb_url: "https://www.facebook.com/DanvilleBrewingCo/",
  insta_url: "https://www.instagram.com/danvillebrewingco/"
)

# brewery1
beer1 = Beer.create!(
  beer_name: "Apocalypse IPA",
  brewery_id: brewery1.id,
  abv: 6.8,
  ibu: 70,
  style: "IPA - American",
  description: "Balanced Hop Forward Flavor"
)
beer2 = Beer.create!(
  beer_name: "Joe IPA",
  brewery_id: brewery1.id,
  abv: 6.9,
  ibu: 70,
  style: "IPA - American",
  description: "Bright Citrusy Flavor"
)
beer3 = Beer.create!(
  beer_name: "Profuse IPA",
  brewery_id: brewery1.id,
  abv: 6.5,
  ibu: 70,
  style: "IPA - American",
  description: "Juicy Hop Flavor"
)
beer4 = Beer.create!(
  beer_name: "Nature Calls",
  brewery_id: brewery1.id,
  abv: 6.5,
  ibu: 55,
  style: "IPA - American",
  description: "Smooth profile of mango, tangerine, and grapefruit"
)
beer5 = Beer.create!(
  beer_name: "Pub Beer",
  brewery_id: brewery1.id,
  abv: 5,
  ibu: 18,
  style: "IPA - American",
  description: "Pear Character"
)


# checkins for beers 1 and 2 and brewery 1
checkin1 = Checkin.create!(
  rating: 5.0,
  description: "I'm ending this just like I ended the last apocalypse.",
  user_id: user1.id,
  beer_id: beer1.id
)
checkin2 = Checkin.create!(
  rating: 1.75,
  description: "Used to know a Joe, hated him too",
  user_id: user2.id,
  beer_id: beer2.id
)

# brewery2
beer6 = Beer.create!(
  beer_name: "101 North Heroine IPA",
  brewery_id: brewery2.id,
  abv: 7.2,
  style: "IPA - American",
  description: "Immodest hop additions throughout the brewing process characterize this distinctive, amber colored NorCal fashioned India Pale Ale."
)
beer7 = Beer.create!(
  beer_name: "101 Lookout Stout",
  brewery_id: brewery2.id,
  abv: 6,
  style: "Stout",
  description: "Pitch black beer with a tan head, a bit syrupy with a burnt bitter chocolate flavor and lots of roasted grain."
)
beer8 = Beer.create!(
  beer_name: "101 Pecker Pole Pale Ale",
  brewery_id: brewery2.id,
  abv: 5.6,
  style: "Pale Ale",
  description: "Classic Ale that is pleasantly hoppy, very easy to drink and our most popular!"
)
beer9 = Beer.create!(
  beer_name: "Heroine India Pale Ale",
  brewery_id: brewery2.id,
  abv: 7.2,
  style: "IPA - American",
  description: "Immodest hop additions throughout the brewing process characterize this distinctive, amber colored NorCal fashioned India Pale Ale."
)
beer10 = Beer.create!(
  beer_name: "Hook Tender Honey Brown Ale",
  brewery_id: brewery2.id,
  abv: 5.5,
  style: "Brown Ale",
  description: "Caramelly and Roasty but smooth and with the floral flavor of honey. Quite yummy and full or grain flavor."
)

# brewery3
beer11 = Beer.create!(
  beer_name: "Boss Pour IPA",
  brewery_id: brewery3.id,
  abv: 7.0,
  ibu: 55,
  style: "IPA - American",
  description: "A soft bitterness from the Nugget and Cascade hops make this is a classic IPA."
)
beer12 = Beer.create!(
  beer_name: "Hazy Dreams",
  brewery_id: brewery3.id,
  abv: 6.9,
  ibu: 30,
  style: "IPA - American",
  description: "The aggressively hop forward nose, provided by Nugget and Mosaic, is followed by waves of citrus and tropical fruits from Cascade and Citra."
)
beer13 = Beer.create!(
  beer_name: "Secret Safari",
  brewery_id: brewery3.id,
  abv: 5.0,
  ibu: 30,
  style: "IPA - American",
  description: "Citrus and tropical fruits dominate, but dont leave the slight bready malt flavor behind, while its crispness keeps you wanting another sip."
)
beer14 = Beer.create!(
  beer_name: "Tiki Life for Me",
  brewery_id: brewery3.id,
  abv: 5.8,
  ibu: 10,
  style: "Wheat Beer",
  description: " Inspired by classic tiki cocktails we used some classic components like pineapple, coconut and almond. "
)
beer15 = Beer.create!(
  beer_name: "Mocha Stout",
  brewery_id: brewery3.id,
  abv: 7.0,
  ibu: 55,
  style: "Stout",
  description: "This luscious year-round coffee stout is made with beans from a local San Diego coffee roaster. We then add a healthy dose of cacao nibs creating velvety chocolate notes that compliment the subtle roastiness from dark malts and coffee beans."
)

# brewery4
beer16 = Beer.create!(
  beer_name: "Shipwrecked On Sour Island",
  brewery_id: brewery4.id,
  abv: 4.3,
  style: "Sour",
  description: "Island inspired kettle sour with Pineapple & Coconut."
)
beer17 = Beer.create!(
  beer_name: "Pineapple Buck Up",
  brewery_id: brewery4.id,
  abv: 4.7,
  style: "German Ale",
  description: "German-style ale matured on real pineapple puree."
)
beer18 = Beer.create!(
  beer_name: "Oatie Oats",
  brewery_id: brewery4.id,
  abv: 5.7,
  style: "IPA - American",
  description: "American IPA brewed with oats. Hopped intensely with Amarillo, Citra and Mosaic."
)
beer19 = Beer.create!(
  beer_name: "BuckUp",
  brewery_id: brewery4.id,
  abv: 4.7,
  style: "German Ale",
  description: "Delicate malt character, herbal hops, effervescent & quenching."
)
beer20 = Beer.create!(
  beer_name: "THANK YOU!",
  brewery_id: brewery4.id,
  abv: 6.6,
  style: "IPA - Belgian",
  description: "Simcoe single-hopped hazy IPA brewed."
)

# brewery5
beer21 = Beer.create!(
  beer_name: "Danville IPA",
  brewery_id: brewery5.id,
  abv: 6.2,
  style: "IPA - American",
  description: "Resinous pine and grapefruit from Northwest hops, crisp and clean."
)
beer22 = Beer.create!(
  beer_name: "925 Blonde",
  brewery_id: brewery5.id,
  abv: 5.5,
  style: "Blonde Ale",
  description: "Delicate flavors of melon, and strawberry aroma, soft bitterness."
)
beer23 = Beer.create!(
  beer_name: "Chux Double IPA",
  brewery_id: brewery5.id,
  abv: 8,
  style: "IPA - American",
  description: "Citrusy-tropical hop aromas, soft malt sweetness."
)
beer24 = Beer.create!(
  beer_name: "Hop Magee IPA",
  brewery_id: brewery5.id,
  abv: 7.4,
  style: "IPA - American",
  description: "North East style IPA, juicy, soft, hazy."
)
beer25 = Beer.create!(
  beer_name: "Station 31",
  brewery_id: brewery5.id,
  abv: 5,
  style: "German Ale",
  description: "German lager, bold malt and light smoke."
)


