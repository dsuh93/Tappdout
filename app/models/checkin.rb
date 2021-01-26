class Checkin < ApplicationRecord
  validates :rating, :description

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :beer,
    foreign_key: :beer_id,
    class_name: :Beer
end
