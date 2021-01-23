class Brewery < ApplicationRecord
  validates :brewery_name, presence: true, uniqueness: true
  validates :location, presence: true
  validates :brewery_type, presence: true, inclusion: {
    in: [
      "Macro Brewery",
      "Micro Brewery",
      "Nano Brewery",
      "Brew Pub",
      "Home Brewery"
    ]
  }

  has_many :beers,
    foreign_key: :brewery_id,
    class_name: :Beer

  # def get_beers(breweries)
  #   breweries.each do |brewery|
  #     Brewery.select("beers.id")
  #       .joins(:beers)
  #       .where("beers.brewery_id")
  #   end
  # end
end
