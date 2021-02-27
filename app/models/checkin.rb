class Checkin < ApplicationRecord
  validates :rating, :description, :beer_id, :user_id, presence: true

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :beer,
    foreign_key: :beer_id,
    class_name: :Beer

  has_many :toasts,
    foreign_key: :checkin_id,
    class_name: :Toast,
    dependent: :destroy
  
  has_many :comments,
    foreign_key: :checkin_id,
    class_name: :Comment,
    dependent: :destroy

  has_one_attached :photo



end
