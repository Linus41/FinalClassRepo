var mysql = require("mysql");
const inquirer = require("inquirer")

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "ice_creamDB"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  iceCreamManager();
});

function createProduct() {
  inquirer.prompt([{
    type: "input",
    name: "flavor",
    message: "What Flavor would you like to create?"
  },
  {
    type: "number",
    name: "price",
    message: "What price should it have?"
  },
  {
    type: "number",
    name: "quantity",
    message: "How much should be in stock?"
  }]).then(createPrompt => {
    connection.query(
      "INSERT INTO products SET ?",
      {
        flavor: createPrompt.flavor,
        price: createPrompt.price,
        quantity: createPrompt.quantity
      },
      function (errOne, resOne) {
        if (errOne) throw errOne;
        iceCreamManager();
      }
    );
  });
}

function updateProduct() {
  connection.query("SELECT * FROM products", function (errOne, resOne) {
    if (errOne) throw errOne;
    // console.log(resOne)
    inquirer.prompt([{
      type: "list",
      name: "id",
      message: "What Flavor do you want to update?",
      choices: resOne.map(product => {
        return {
          name: product.flavor,
          value: product.id
        }
      })
    },
    {
      type: "input",
      name: "flavor",
      message: "What would you like to change it to?"
    },
    {
      type: "number",
      name: "price",
      message: "What price should it have?"
    },
    {
      type: "input",
      name: "quantity",
      message: "How much should be in stock?"
    }]).then(updatePrompt => {
      connection.query(
        "UPDATE products SET ? WHERE ?",
        [
          {
            price: updatePrompt.price,
            quantity: updatePrompt.quantity,
            flavor: updatePrompt.flavor
          },
          {
            id: updatePrompt.id
          }
        ],
        function (errTwo, resTwo) {
          if (errTwo) throw errTwo;
          iceCreamManager();
        }
      );
    });

  });

}

function deleteProduct() {
  connection.query("SELECT * FROM products", function (errOne, resOne) {
    if (errOne) throw errOne;
    inquirer.prompt([{
      type: "list",
      name: "id",
      message: "What Flavor Id do you want to delete?",
      choices: resOne.map(product => {
        return {
          name: product.flavor,
          value: product.id
        }
      })
    }]).then(deletePrompt => {
      connection.query(
        "DELETE FROM products WHERE ?",
        {
          id: deletePrompt.id
        },
        function (errTwo, resTwo) {
          if (errTwo) throw errTwo;
          iceCreamManager();
        }
      );
    });
  });
}

function readProducts() {
  connection.query("SELECT * FROM products", function (err, res) {
    console.table(res)
    if (err) throw err;
    iceCreamManager();
  });
}


function iceCreamManager() {
  inquirer.prompt([{
    message: "What would you like to do?",
    name: "action",
    type: "list",
    choices: [
      {
        name: "See all Ice Creams",
        value: "read"
      },
      {
        name: "Create an Ice Cream",
        value: "create"
      },
      {
        name: "Update an Ice Cream",
        value: "update"
      },
      {
        name: "Delete an Ice Cream",
        value: "delete"
      },
      {
        name: "Quit",
        value: "quit"
      }
    ]
  }]).then(actionPrompt => {
    if (actionPrompt.action === "read") {
      readProducts();
    } else if (actionPrompt.action === "create") {
      createProduct();
    } else if (actionPrompt.action === "update") {
      updateProduct();
    } else if (actionPrompt.action === "delete") {
      deleteProduct();
    } else {
      return;
    }
  })

}