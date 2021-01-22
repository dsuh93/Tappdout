export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  })
);

export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
)

export const breweryDBGet = () => (
  $.ajax({
    method: 'GET',
    url: "https://sandbox-api.brewerydb.com/v2/beers/?key=2bc7a9dd7b33f214f52f673c9f6f56b8"
  })
)