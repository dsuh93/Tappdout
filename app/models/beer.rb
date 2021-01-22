class Beer < ApplicationRecord
  validates :beer_name, presence: true, uniqueness: true
  validates :brewery_id, :style, presence: true

  belongs_to :breweries,
    foreign_key: :brewery_id,
    class_name: :Brewery

  


end
