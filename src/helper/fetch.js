const { BACKEND_URL } = require("@/Utils/urls");

export async function get(endpoint) {
  // const item = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  try {
    const response = await fetch(BACKEND_URL + endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",

        //   Authorization: "Bearer " + item,
      },
    });

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error("Request failed");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function post(endpoint, body) {
  try {
    const response = await fetch(BACKEND_URL + endpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        //   Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error("Request failed");
    }
    console.log("response",response)
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export async function put(endpoint, body) {
  try {
    const response = await fetch(BACKEND_URL + endpoint, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error("Request failed");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}
