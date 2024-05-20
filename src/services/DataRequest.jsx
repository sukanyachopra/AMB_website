export async function getState() {
  try {
    const response = await fetch(
      "http://amb-qa-env.eba-prycu9wy.eu-north-1.elasticbeanstalk.com/state/names"
    );
    return response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchRank(data) {
  fetch(
    "http:///amb-qa-env.eba-prycu9wy.eu-north-1.elasticbeanstalk.com/ranking/monthlyRanking",
    data
  )
    .then(async (response) => {
      const isJson = response.headers
        .get("content-type")
        ?.includes("application/json");
      const responseData = isJson && (await response.json());

      // check for error response
      if (!response.ok) {
        // get error message from body or default to response status
        const error = (responseData && responseData.message) || response.status;
        return Promise.reject(error);
      }

      //this.setState({ postId: data.id })
      return responseData;
    })
    .catch((error) => {
      this.setState({ errorMessage: error.toString() });
      console.error("There was an error!", error);
    });
}

export async function fetchRankData(idata) {
  try {
    const response = await fetch(
      "http:///amb-qa-env.eba-prycu9wy.eu-north-1.elasticbeanstalk.com/ranking/ambRanking",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(idata),
      }
    );

    // await response.json().then(function(resdata) {
    //     //const va = resdata.data;
    //     return resdata;
    // });
    return response.json();
  } catch (e) {
    console.error(e);
  }

  return [];
}

// Function to retrieve map data based on the provided input
export async function getMapData(idata) {
  try {
    const response = await fetch(
      "http:///amb-qa-env.eba-prycu9wy.eu-north-1.elasticbeanstalk.com/map/ranking",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(idata),
      }
    );
    return response.json();
  } catch (e) {
    console.error(e);
  }

  return [];
}
