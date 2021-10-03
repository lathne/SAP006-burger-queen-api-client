
export const loginWithUserPassword = (email, password) => {
  console.log(email, password)
  return  fetch("https://lab-api-bq.herokuapp.com/auth", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify ({
    "email": email,
    "password": password
  })
});
};


export const registerUser = (values) => {
  console.log(values)
  return  fetch("https://lab-api-bq.herokuapp.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify ({
    "name": values.name,
    "email": values.email,
    "password": values.password,
    "role": values.role,
    "restaurant": "Red Queen"
  })
});
};

export const editUser = (name, role, userId) => {
  return fetch (`https://lab-api-bq.herokuapp.com/users/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify ({
      "name": name,
      "role": role,
    })
  });
};

export const getAllProducts = async () => {
  return await fetch (`https://lab-api-bq.herokuapp.com/products`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization:`${localStorage.getItem("usersToken")}`
    }
  })
}

export const createOrder = async (values) => {
  return await fetch (`https://lab-api-bq.herokuapp.com/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:`${localStorage.getItem("usersToken")}`
    },
    body: JSON.stringify(
     values
    )
  })
}
  
export const listAllOrders = () => {
  return fetch(`https://lab-api-bq.herokuapp.com/orders`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${localStorage.getItem("usersToken")}`,
    },
  })
}

export const upDateOrderStatus = (orderId, status) => {
return fetch (`https://lab-api-bq.herokuapp.com/orders/${orderId}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    Authorization: `${localStorage.getItem("usersToken")}`,
  },
  body: status
})}
  