class Beer < ApplicationRecord
  validates :beer_name, presence: true, uniqueness: true
  validates :brewery_id, :style, presence: true

  belongs_to :brewery,
    foreign_key: :brewery_id,
    class_name: :Brewery

  has_many :checkins,
    foreign_key: :beer_id,
    class_name: :Beer 


end
