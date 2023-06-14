import axios from "axios";

const baseUrl = "http://localhost:5000";

export function getAllOrders(setAllOrders) {
  axios.get(baseUrl).then((data) => {
    console.log(data);
    setAllOrders(data);
  });
}

export function addOrder(orderObj) {
  const {
    user,
    orderId,
    cartItems,
    shippingAddress,
    status,
    totalPrice,
    createdAt,
    paymentMethod,
  } = orderObj;
  axios
    .post(`${baseUrl}/save`, {
      user,
      orderId,
      cartItems,
      shippingAddress,
      status,
      totalPrice,
      createdAt,
      paymentMethod,
    })
    .then((data) => {
      // setText("");
      // getAllOrders(setAllOrders);
    });
}

// export function updateTodo(text, setText, setAllTasks, setIsUpdating, todoId) {
//   axios.post(`${baseUrl}/update`, { _id: todoId, text }).then((data) => {
//     setText("");
//     setIsUpdating(false);
//     getAllTodos(setAllTasks);
//   });
// }
