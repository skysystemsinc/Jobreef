const httpRequest = async (url, method, data = null, option) => {
  try {
    const options = {
      method: method,
      body: data ? JSON.stringify(data) : null,
      ...option,
    };

    const response = await fetch(url, options);

    if (!response) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const responseData = await response.json();
    
    return responseData;
  } catch (error) {
    console.error("Error making HTTP request:", error);
    // Handle the error as needed (e.g., show an error message to the user)
    return error;
  }
};
export { httpRequest };
