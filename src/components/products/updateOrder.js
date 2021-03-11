export const updateOrderStatus = (newStatus, orderId, callback) => {
  console.log(newStatus, orderId)
  const token = localStorage.getItem('token');
  fetch(`https://lab-api-bq.herokuapp.com/orders/${orderId}`, {
    method: "PUT",
      headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": token,
      },
      body: JSON.stringify({
        "status": newStatus
      })
  })
    .then(response => {
      if (response.status === 200) {
        callback(newStatus);
      }
    })
    .catch(() => {alert('algo deu errado')});
};
