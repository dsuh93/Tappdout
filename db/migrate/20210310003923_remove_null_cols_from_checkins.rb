class RemoveNullColsFromCheckins < ActiveRecord::Migration[5.2]
  def change
    remove_column :checkins, :rating
    remove_column :checkins, :description
    add_column :checkins, :rating, :float
    add_column :checkins, :description, :string
  end
end
