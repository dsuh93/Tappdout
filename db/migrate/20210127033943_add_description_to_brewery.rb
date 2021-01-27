class AddDescriptionToBrewery < ActiveRecord::Migration[5.2]
  def change
    add_column :breweries, :description, :string
  end
end
