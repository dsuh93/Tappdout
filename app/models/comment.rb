class Comment < ApplicationRecord
  validates :body, :author_id, :checkin_id, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :checkin,
    foreign_key: :checkin_id,
    class_name: :Checkin 
end
