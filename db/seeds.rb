# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# require 'json'


require 'open-uri'


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
file = URI.open('https://tappdout-seeds.s3.amazonaws.com/tappdout-seeds/b-1.jpeg')
brewery1.photo.attach(io: file, filename: 'b-1.jpeg')
brewery2 = Brewery.create!(
  brewery_name: "8 Bit Brewing Company",
  brewery_type: "Brew Pub",
  location: "Murrieta, California",
  description: "A family owned brewpub in Murrieta, CA specializing in Craft Beer in Artisan Eats.",
  web_url: "https://www.8bitbrewingcompany.com/craft-beer/",
  fb_url: "https://www.facebook.com/8bitBrewingCompany?ref=hl",
  insta_url: "https://www.instagram.com/8bitbrewingcompany/"
)
file = URI.open('https://tappdout-seeds.s3.amazonaws.com/tappdout-seeds/b-2.jpeg')
brewery2.photo.attach(io: file, filename: 'b-2.jpeg')
brewery3 = Brewery.create!(
  brewery_name: "Abnormal Beer Company",
  brewery_type: "Nano Brewery",
  location: "San Diego, California",
  description: "As San Diego's first and only Brewery/Winery/Restaurant, we pride ourselves on putting everything we have into the things we do and push the boundaries of creative products to share with our guests. Our beers are focused on drinkability, merging inspirational flavors from our restaurant and winery to create one of a kind products. Our tasting room is attached to our restaurant, The Cork and Craft. We're normally open every day except for Monday, including lunch during the work week, and brunch on Sundays. Come in for the beer, stay for the food, and discover your Abnormal side.",
  web_url: "https://abnormalbeer.co/",
  fb_url: "https://www.facebook.com/AbnormalBeerCo/",
  insta_url: "https://www.instagram.com/abnormalbeerco/?hl=en"
)
file = URI.open('https://tappdout-seeds.s3.amazonaws.com/tappdout-seeds/b-3.jpeg')
brewery3.photo.attach(io: file, filename: 'b-3.jpeg')
brewery4 = Brewery.create!(
  brewery_name: "Brewery Twenty Five",
  brewery_type: "Home Brewery",
  location: "Hollister, California",
  description: "Brewery Twenty Five is a 7bbl(200gal) brewery based in San Benito County. Our TapRoom is in Downtown San Juan Bautista Open Friday & Saturday! Thanks for following us as we begin our new endeavor. Brewery Twenty Five will focus on handcrafted beers that will utilize locally-sourced ingredients whenever possible.",
  web_url: "https://shop.brewerytwentyfive.com/",
  fb_url: "https://www.facebook.com/brewerytwentyfive/",
  insta_url: "https://www.instagram.com/brewerytwentyfive/?hl=en"
)
file = URI.open('https://tappdout-seeds.s3.amazonaws.com/tappdout-seeds/b-4.jpeg')
brewery4.photo.attach(io: file, filename: 'b-4.jpeg')
brewery5 = Brewery.create!(
  brewery_name: "Drake's Brewing Co.",
  brewery_type: "Macro Brewery",
  location: "San Leandro, California",
  description: "Drake’s started brewing inside a former Dodge car factory during the first wave of craft beer in the Bay Area. Since then, the company has evolved from pioneer to persistent innovator.",
  web_url: "https://drinkdrakes.com/",
  fb_url: "https://www.facebook.com/DrakesBeer/",
  insta_url: "https://www.instagram.com/drakesbeer/"
)
file = URI.open('https://tappdout-seeds.s3.amazonaws.com/tappdout-seeds/b-5.jpeg')
brewery5.photo.attach(io: file, filename: 'b-5.jpeg')

# brewery1
beer1 = Beer.create!(
  beer_name: "Apocalypse IPA",
  brewery_id: brewery1.id,
  abv: 6.8,
  ibu: 70,
  style: "IPA - American",
  description: "Balanced Hop Forward Flavor"
)
file = URI.open('https://tappdout-seeds.s3.amazonaws.com/tappdout-seeds/1-1.png')
beer1.photo.attach(io: file, filename: '1-1.png')
beer2 = Beer.create!(
  beer_name: "Joe IPA",
  brewery_id: brewery1.id,
  abv: 6.9,
  ibu: 70,
  style: "IPA - American",
  description: "Bright Citrusy Flavor"
)
file = URI.open('https://tappdout-seeds.s3.amazonaws.com/tappdout-seeds/1-2.png')
beer2.photo.attach(io: file, filename: '1-2.png')
beer3 = Beer.create!(
  beer_name: "Profuse IPA",
  brewery_id: brewery1.id,
  abv: 6.5,
  ibu: 70,
  style: "IPA - American",
  description: "Juicy Hop Flavor"
)
file = URI.open('https://tappdout-seeds.s3.amazonaws.com/tappdout-seeds/1-3.png')
beer3.photo.attach(io: file, filename: '1-3.png')
beer4 = Beer.create!(
  beer_name: "Nature Calls",
  brewery_id: brewery1.id,
  abv: 6.5,
  ibu: 55,
  style: "IPA - American",
  description: "Smooth profile of mango, tangerine, and grapefruit"
)
file = URI.open('https://tappdout-seeds.s3.amazonaws.com/tappdout-seeds/1-4.png')
beer4.photo.attach(io: file, filename: '1-4.png')
beer5 = Beer.create!(
  beer_name: "Pub Beer",
  brewery_id: brewery1.id,
  abv: 5,
  ibu: 18,
  style: "IPA - American",
  description: "Pear Character"
)
file = URI.open('https://tappdout-seeds.s3.amazonaws.com/tappdout-seeds/1-5.png')
beer5.photo.attach(io: file, filename: '1-5.png')


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
  beer_name: "Perfectly Adrift",
  brewery_id: brewery2.id,
  abv: 4.8,
  style: "Pilsner",
  description: "Czech Style Pilsner w/ Saaz and Saphir."
)
file = URI.open('https://tappdout-seeds.s3.amazonaws.com/tappdout-seeds/2-1.jpeg')
beer6.photo.attach(io: file, filename: '2-1.jpeg')
beer7 = Beer.create!(
  beer_name: "True Brewmance",
  brewery_id: brewery2.id,
  abv: 7.1,
  style: "IPA - American",
  description: "West Coast IPA w/ Mosaic."
)
file = URI.open('https://tappdout-seeds.s3.amazonaws.com/tappdout-seeds/2-2.jpeg')
beer7.photo.attach(io: file, filename: '2-2.jpeg')
beer8 = Beer.create!(
  beer_name: "Call of Brewty: Ghost Ops",
  brewery_id: brewery2.id,
  abv: 10.2,
  style: "IPA - English",
  description: "Hazy TIPA TDH w/ Mosaic, El Dorado & Idaho 7."
)
file = URI.open('https://tappdout-seeds.s3.amazonaws.com/tappdout-seeds/2-3.jpeg')
beer8.photo.attach(io: file, filename: '2-3.jpeg')
beer9 = Beer.create!(
  beer_name: "The Archive",
  brewery_id: brewery2.id,
  abv: 9.1,
  style: "IPA - English",
  description: "DDH w/ Citra, Mosaic & 'The Bruce'."
)
file = URI.open('https://tappdout-seeds.s3.amazonaws.com/tappdout-seeds/2-4.jpeg')
beer9.photo.attach(io: file, filename: '2-4.jpeg')
beer10 = Beer.create!(
  beer_name: "Citradome",
  brewery_id: brewery2.id,
  abv: 8.8,
  style: "IPA - American",
  description: "hazy DIPA w/ Citra, enigma, mosaic."
)
file = URI.open('https://tappdout-seeds.s3.amazonaws.com/tappdout-seeds/2-5.jpeg')
beer10.photo.attach(io: file, filename: '2-5.jpeg')

# brewery3
beer11 = Beer.create!(
  beer_name: "Boss Pour IPA",
  brewery_id: brewery3.id,
  abv: 7.0,
  ibu: 55,
  style: "IPA - American",
  description: "A soft bitterness from the Nugget and Cascade hops make this is a classic IPA."
)
file = URI.open('https://tappdout-seeds.s3.amazonaws.com/tappdout-seeds/3-1.jpg')
beer11.photo.attach(io: file, filename: '3-1.jpg')
beer12 = Beer.create!(
  beer_name: "Hazy Dreams",
  brewery_id: brewery3.id,
  abv: 6.9,
  ibu: 30,
  style: "IPA - American",
  description: "The aggressively hop forward nose, provided by Nugget and Mosaic, is followed by waves of citrus and tropical fruits from Cascade and Citra."
)
file = URI.open('https://tappdout-seeds.s3.amazonaws.com/tappdout-seeds/3-1.jpg')
beer12.photo.attach(io: file, filename: '3-1.jpg')
beer13 = Beer.create!(
  beer_name: "Secret Safari",
  brewery_id: brewery3.id,
  abv: 5.0,
  ibu: 30,
  style: "IPA - American",
  description: "Citrus and tropical fruits dominate, but dont leave the slight bready malt flavor behind, while its crispness keeps you wanting another sip."
)
file = URI.open('https://tappdout-seeds.s3.amazonaws.com/tappdout-seeds/3-3.jpg')
beer13.photo.attach(io: file, filename: '3-3.jpg')
beer14 = Beer.create!(
  beer_name: "Peach Cobbler",
  brewery_id: brewery3.id,
  abv: 6.8,
  ibu: 5,
  style: "IPA - Imperial",
  description: "Introducing Abnormal Peach Cobbler, a fruity-sweet and refreshing play on the classic dessert. We add 1lb per gallon of Peach Purée, a blend of rich Vanilla Beans, and a touch of Cinnamon to our imperial berlinerweiss to achieve all the flavors in the actual pie."
)
file = URI.open('https://tappdout-seeds.s3.amazonaws.com/tappdout-seeds/3-4.jpg')
beer14.photo.attach(io: file, filename: '3-4.jpg')
beer15 = Beer.create!(
  beer_name: "Mocha Stout",
  brewery_id: brewery3.id,
  abv: 7.0,
  ibu: 55,
  style: "Stout",
  description: "This luscious year-round coffee stout is made with beans from a local San Diego coffee roaster. We then add a healthy dose of cacao nibs creating velvety chocolate notes that compliment the subtle roastiness from dark malts and coffee beans."
)
file = URI.open('https://tappdout-seeds.s3.amazonaws.com/tappdout-seeds/3-5.jpg')
beer15.photo.attach(io: file, filename: '3-5.jpg')

# brewery4
beer16 = Beer.create!(
  beer_name: "Shipwrecked On Sour Island",
  brewery_id: brewery4.id,
  abv: 4.3,
  style: "Sour",
  description: "Island inspired kettle sour with Pineapple & Coconut."
)
file = URI.open('https://tappdout-seeds.s3.amazonaws.com/tappdout-seeds/4-1.jpeg')
beer16.photo.attach(io: file, filename: '4-1.jpeg')
beer17 = Beer.create!(
  beer_name: "Pineapple Buck Up",
  brewery_id: brewery4.id,
  abv: 4.7,
  style: "German Ale",
  description: "German-style ale matured on real pineapple puree."
)
file = URI.open('https://tappdout-seeds.s3.amazonaws.com/tappdout-seeds/4-2.jpeg')
beer17.photo.attach(io: file, filename: '4-2.jpeg')
beer18 = Beer.create!(
  beer_name: "Oatie Oats",
  brewery_id: brewery4.id,
  abv: 5.7,
  style: "IPA - American",
  description: "American IPA brewed with oats. Hopped intensely with Amarillo, Citra and Mosaic."
)
file = URI.open('https://tappdout-seeds.s3.amazonaws.com/tappdout-seeds/4-3.jpeg')
beer18.photo.attach(io: file, filename: '4-3.jpeg')
beer19 = Beer.create!(
  beer_name: "BuckUp",
  brewery_id: brewery4.id,
  abv: 4.7,
  style: "German Ale",
  description: "Delicate malt character, herbal hops, effervescent & quenching."
)
file = URI.open('https://tappdout-seeds.s3.amazonaws.com/tappdout-seeds/4-4.jpeg')
beer19.photo.attach(io: file, filename: '4-4.jpeg')
beer20 = Beer.create!(
  beer_name: "THANK YOU!",
  brewery_id: brewery4.id,
  abv: 6.6,
  style: "IPA - Belgian",
  description: "Simcoe single-hopped hazy IPA brewed."
)
file = URI.open('https://tappdout-seeds.s3.amazonaws.com/tappdout-seeds/4-5.jpeg')
beer20.photo.attach(io: file, filename: '4-5.jpeg')

# brewery5
beer21 = Beer.create!(
  beer_name: "1500",
  brewery_id: brewery5.id,
  abv: 5.5,
  ibu: 48,
  style: "Pale Ale",
  description: "Generously dry-hopped with Amarillo and Simcoe for a bright, piney punch, 1500 brings together orange blossom and grapefruit notes with a touch of honey sweetness. We don’t like choosing favorites, but 1500 is our perfect everyday hoppy beer."
)
file = URI.open('https://tappdout-seeds.s3.amazonaws.com/tappdout-seeds/5-1.png')
beer21.photo.attach(io: file, filename: '5-1.png')
beer22 = Beer.create!(
  beer_name: "Best Coast IPA",
  brewery_id: brewery5.id,
  abv: 7,
  ibu: 64,
  style: "Pale Ale",
  description: "A classic West Coast IPA! Best Coast IPA is a harmonious fusion of resinous pine and orange peel cascading over a backdrop of lightly toasted caramel and brisk bitterness. Revel in the bright aromatics and let Drake’s Best Coast IPA show you why the West Coast is the Best Coast!"
)
file = URI.open('https://tappdout-seeds.s3.amazonaws.com/tappdout-seeds/5-2.png')
beer22.photo.attach(io: file, filename: '5-2.png')
beer23 = Beer.create!(
  beer_name: "Denogginizer",
  brewery_id: brewery5.id,
  abv: 9.75,
  ibu: 90,
  style: "IPA - American",
  description: "Brace yourself. Denogginizer is a massive Double IPA that’s sublimely hopped with an over-the-top dosing of dank, sticky, West Coast hops. With just enough malt backbone to keep the big, bold, resinous hop monster in check, be careful, you might lose your head to the Denogginizer."
)
file = URI.open('https://tappdout-seeds.s3.amazonaws.com/tappdout-seeds/5-3.png')
beer23.photo.attach(io: file, filename: '5-3.png')
beer24 = Beer.create!(
  beer_name: "Flyway Pils",
  brewery_id: brewery5.id,
  abv: 4.5,
  ibu: 43,
  style: "Pilsner",
  description: "Flyway Pils is a North German style pilsner, which are distinctive in their high hopping rates and clean, dry body. We combine extra premium pale German pilsner malt with the most American ingredient of all, flaked maize, which dries the body out nicely, and we hop it exclusively with a noble-style American hop called Vanguard. The beer displays a nice spiciness with a subtle fruited note, and finishes clean and dry."
)
file = URI.open('https://tappdout-seeds.s3.amazonaws.com/tappdout-seeds/5-4.png')
beer24.photo.attach(io: file, filename: '5-4.png')
beer25 = Beer.create!(
  beer_name: "Hefeweizen",
  brewery_id: brewery5.id,
  abv: 4.5,
  ibu: 15,
  style: "Hefeweizen",
  description: "Like the fog lingering over the bay, our take on the classic wheat beer is unfiltered for a hazy appearance and fluffy mouthfeel. It’s a smooth, easy drinker, with notes of fresh banana and clove spice that finishes with a soft, mellow sweetness. Just say: 'hay-fuh-vite-sun!'"
)
file = URI.open('https://tappdout-seeds.s3.amazonaws.com/tappdout-seeds/5-5.png')
beer25.photo.attach(io: file, filename: '5-5.png')


