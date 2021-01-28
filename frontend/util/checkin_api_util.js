export const fetchCheckins = () => (
  $.ajax({
    method: 'GET',
    url: '/api/checkins'
  })
);

export const fetchCheckin = (checkinId) => (
  $.ajax({
    method: 'GET',
    url: `/api/checkins/${checkinId}`
  })
);

export const createCheckin = (checkin) => (
  $.ajax({
    method: 'POST',
    url: `/api/checkins`,
    data: checkin,
    contentType: false,
    processData: false
  })
);

export const deleteCheckin = (checkinId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/checkins/${checkinId}`
  })
);

