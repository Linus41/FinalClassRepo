const fs = require("fs");
const axios = require("../../29-Stu-Jokez/Unsolved/node_modules/axios");
const inquirer = require("inquirer");

inquirer
  .prompt({
    message: "Enter your GitHub username",
    name: "username"
  })
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
  });
