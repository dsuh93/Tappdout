class CreateToasts < ActiveRecord::Migration[5.2]
  def change
    create_table :toasts do |t|
      t.integer :toaster_id, null: false
      t.integer :checkin_id, null: false
      t.timestamps
    end
    add_index :toasts, :toaster_id 
    add_index :toasts, :checkin_id 
  end
end
