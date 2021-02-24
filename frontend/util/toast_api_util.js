export const createToast = (toast) => (
  $.ajax({
    method: "POST",
    url: '/api/toasts',
    data: {toast}
  })
);

export const deleteToast = (toastId) => (
  $.ajax({
    method: "DELETE",
    url: `/api/toasts/${toastId}`
  })
)