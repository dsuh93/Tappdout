export const receiveBreweries = () => (
  $.ajax({
    method: "GET",
    url: '/api/breweries'
  })
)



//use this if necessary for search bar
// export const breweryDBGet = () => (
//   $.ajax({
//     method: 'GET',
//     url: "https://sandbox-api.brewerydb.com/v2/beers/?key=2bc7a9dd7b33f214f52f673c9f6f56b8"
//   })
// )