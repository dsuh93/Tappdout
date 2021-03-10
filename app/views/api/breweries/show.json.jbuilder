json.partial! 'api/breweries/brewery', brewery: @brewery
json.breweryPhotoURL url_for(@brewery.photo) if @brewery.photo.attached?
json.beers do
  @brewery.beers.each do |beer|
    json.set! beer.id do
      json.partial! '/api/beers/beer', beer: beer
      json.beerPhotoURL url_for(beer.photo) if beer.photo.attached?
    end
  end
end
json.checkins do
  @brewery.beer_checkins.each do |checkin|
    json.set! checkin.id do
      json.partial! '/api/checkins/checkin', checkin: checkin
      json.user do
        json.partial! '/api/users/user', user: checkin.user
      end
      json.beer do
        json.partial! '/api/beers/beer', beer: checkin.beer
        json.beerPhotoURL url_for(checkin.beer.photo) if checkin.beer.photo.attached?
      end
      json.brewery checkin.beer.brewery.brewery_name
      json.breweryPhotoURL url_for(checkin.beer.brewery.photo) if checkin.beer.brewery.photo.attached?
      json.toasts do
        checkin.toasts.each do |toast|
          json.set! toast.toaster_id do
            json.extract! toast, :id
          end
        end
      end
      json.comments do
        checkin.comments.each do |comment|
          json.set! comment.id do
            json.partial! '/api/comments/comment', comment: comment
            json.author comment.author.first_name + " " + comment.author.last_name
          end
        end
      end
      json.photoURL url_for(checkin.photo) if checkin.photo.attached?
    end
  end
end