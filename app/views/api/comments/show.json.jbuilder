json.partial! '/api/comments/comment', comment: @comment
json.author @comment.author.first_name + " " + @comment.author.last_name