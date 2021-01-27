class AddLinksToBrewery < ActiveRecord::Migration[5.2]
  def change
    add_column :breweries, :web_url, :string
    add_column :breweries, :fb_url, :string
    add_column :breweries, :insta_url, :string
  end
end
