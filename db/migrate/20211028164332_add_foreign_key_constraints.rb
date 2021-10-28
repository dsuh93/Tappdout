class AddForeignKeyConstraints < ActiveRecord::Migration[5.2]
  def change
    add_foreign_key :beers, :breweries, column: :brewery_id
    add_foreign_key :checkins, :users, column: :user_id
    add_foreign_key :checkins, :beers, column: :beer_id
    add_foreign_key :comments, :users, column: :author_id
    add_foreign_key :comments, :checkins, column: :checkin_id
    add_foreign_key :toasts, :users, column: :toaster_id
    add_foreign_key :toasts, :checkins, column: :checkin_id
  end
end
