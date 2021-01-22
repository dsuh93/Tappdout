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

  
end
