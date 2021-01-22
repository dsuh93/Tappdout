class Brewery < ApplicationRecord
  validates :brewery_name, presence: true, uniqueness: true
  validates :brewery_type, presence: true, inclusion: { in: %()}







  
end
