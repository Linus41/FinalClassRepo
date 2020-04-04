const axios = require("../29-Stu-Jokez/Unsolved/node_modules/axios");

axios
  .get("https://www.omdbapi.com/?t=The%20Matrix&apikey=trilogy")
  .then(function(res) {
    console.log(res.data);
  });
