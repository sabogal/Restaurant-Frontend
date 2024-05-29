import { rutes } from './urls'


export const showDataid = (id, METOD0, TOKEN, API) => {

  let myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${TOKEN}`);
  myHeaders.append("Content-Type", "application/json");
  let requestOptions = {
    method: METOD0,
    headers: myHeaders,
    redirect: "follow",
  };
  return fetch(`${domain}${API}${id}`, requestOptions).then(
    (response) => response.json()
  );
};


export const showData = async (METHOD, TOKEN, API) => {
  try {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${TOKEN}`);
    myHeaders.append("Content-Type", "application/json");
    let requestOptions = {
      method: METHOD,
      headers: myHeaders,
      redirect: "follow",
    };

    const response = await fetch(API, requestOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error; // Puedes manejar el error aquí o simplemente lanzarlo nuevamente
  }
};

export const showDataNoToken = async (METHOD, API) => {
  try {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let requestOptions = {
      method: METHOD,
      headers: myHeaders,
      redirect: "follow",
    };

    const response = await fetch(`${domain}${API}`, requestOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error; // Puedes manejar el error aquí o simplemente lanzarlo nuevamente
  }
};


// Code Analysis

// Objective:
// The objective of the showData function is to fetch data from a specific endpoint using a GET request with authorization headers and return the response in JSON format.

// Inputs:
// - id: a parameter representing the ID of the data to be fetched.

// Flow:
// 1. Retrieve the token from the session storage.
// 2. Create a new Headers object and append the authorization and content-type headers.
// 3. Create a requestOptions object with the method, headers, and redirect properties.
// 4. Use the fetch function to send a GET request to the specified endpoint with the requestOptions object.
// 5. Parse the response as JSON and return it.

// Outputs:
// - A Promise that resolves to the JSON response from the specified endpoint.

// Additional aspects:
// - The domain variable is imported from another file and used as the base URL for the endpoint.
// - The token is retrieved from the session storage and appended to the authorization header.
// - The content-type header is set to "application/json".
// - The fetch function returns a Promise that resolves to the response object, which is then parsed as JSON.