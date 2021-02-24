json.partial! '/api/checkins/checkin', checkin: @checkin
json.user do
  json.partial! '/api/users/user', user: @checkin.user
end
json.beer do
  json.partial! '/api/beers/beer', beer: @checkin.beer
end
json.brewery @checkin.beer.brewery.brewery_name
json.toasts do
  @checkin.toasts.each do |toast|
    json.set! toast.toaster_id do
      json.extract! toast, :id
    end
  end
end
json.photoURL url_for(@checkin.photo) if @checkin.photo.attached?