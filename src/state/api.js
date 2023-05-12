/*
 *  API typically consists of FETCH (as used below), AXIOS, GraphQL, or any other number of services.
 *  The usage below is pointing to a test file on my server for this PoC
 */
const fetchData = async (obj) => {
  try {
    const response = await fetch(
      "https://gladiatorwars.app/rnPHP/service.php",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      }
    );
    if (response.status === 200) {
      const responseJson = await response.json();
      return responseJson;
    }
    return null;
  } catch (e) {
    console.log("Catch Error: ", e);
  }
  return null;
};

export const getDelayedData = async () =>
  fetchData({
    key: "getDelayedData",
  });
