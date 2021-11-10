// CRUD API calls for beers

export const fetchBeers = (search) => (
  $.ajax({
    method: "GET",
    url: '/api/beers',
    data: { search }
  })
);

export const fetchBeer = (beerId) => (
  $.ajax({
    method: "GET",
    url: `/api/beers/${beerId}`
  })
);

export const createBeer = (beer) => (
  $.ajax({
    method: "POST",
    url: '/api/beers',
    data: { beer }
  })
);

export const updateBeer = (beer) => (
  $.ajax({
    method: "PATCH",
    url: `/api/beers/${beer.id}`,
    data: { beer }
  })
);

export const deleteBeer = (beerId) => (
  $.ajax({
    method: "DELETE",
    url: `/api/beers/${beerId}`
  })
);
