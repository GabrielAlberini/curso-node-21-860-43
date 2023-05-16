const https = require("https");

const get = (url) => {
  return new Promise((resolve, reject) => {
    https
      .get(url, (response) => {
        let data = "";
        response.on("data", (chunk) => {
          data += chunk;
        });
        response.on("end", () => {
          resolve(data);
        });
      })
      .on("error", (error) => {
        reject(error);
      });
  });
};

console.log(get("https://rickandmortyapi.com/api/character"));

get("https://rickandmortyapi.com/api/character")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error.message);
  });
