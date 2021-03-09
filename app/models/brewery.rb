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

  has_many :beer_checkins,
    through: :beers,
    source: :checkins
  
  has_one_attached :photo
  
  def self.search_breweries(search_term)
    self.where('brewery_name ILIKE ?', "%#{search_term}%")
      .limit(3)
  end
end
