# json.partial! 'api/users/user', user: @user
json.extract! @user, :id, :username, :email, :first_name, :last_name 