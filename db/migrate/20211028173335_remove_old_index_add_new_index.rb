class RemoveOldIndexAddNewIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :users, :username
    remove_index :users, :email 
    add_index :users, :username, unique: true
    add_index :users, :email, unique: true
  end
end
