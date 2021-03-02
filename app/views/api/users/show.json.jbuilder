json.partial! '/api/users/user', user: @user
json.checkins do
  @user.checkins.each do |checkin|
    json.set! checkin.id do
      json.partial! '/api/checkins/checkin', checkin: checkin
      json.beer do
        json.partial! '/api/beers/beer', beer: checkin.beer
      end
      json.brewery checkin.beer.brewery.brewery_name
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
    end
  end
end