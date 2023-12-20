'use client'
// const { BACKEND_URL } = require("@/Utils/urls");
import { BACKEND_URL } from "@/Utils/urls"

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
    console.log("response", response);
    return await response.json();

    // if (response.ok) {
    //   return await response.json();
    // } else {
    //   // throw new Error("Request failed");
    //   return await response.json();
    // }
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
    console.log("response", response);
    return await response.json();

    // if (response.ok) {
    //   return await response.json();
    // } else {
    //   // throw new Error("Request failed");
    //   return await response.json();
    // }
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
    console.log("response", response);
    return await response.json();

    // if (response.ok) {
    //   return await response.json();
    // } else {
    //   return await response.json();

    //   // throw new Error("Request failed");
    // }
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export async function deleteApi(endpoint) {
  try {
    const response = await fetch(BACKEND_URL + endpoint, {
      method: "DELETE",
    });

    return await response.json();
    // if (response.ok) {
    // } else {
    //   throw new Error("Request failed");
    // }
  } catch (error) {
    console.error(error);
    throw error;
  }
}
