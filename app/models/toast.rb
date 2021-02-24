class Toast < ApplicationRecord
  validates :toaster_id, :checkin_id, presence: true

  belongs_to :toaster,
    foreign_key: :toaster_id,
    class_name: :User

  belongs_to :checkin,
    foreign_key: :checkin_id,
    class_name: :Checkin
end
