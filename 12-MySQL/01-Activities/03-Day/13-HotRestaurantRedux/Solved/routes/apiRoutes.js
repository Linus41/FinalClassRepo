// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app, connection) {
  // API GET Requests
  // ---------------------------------------------------------------------------

  app.get("/api/tables", function(req, res) {
    connection.query("SELECT * FROM tables WHERE waitList = false", (err, data) => {
      res.json(data)
    })
  });

  app.get("/api/waitlist", function(req, res) {
    connection.query("SELECT * FROM tables WHERE waitList = true", (err, data) => {
      res.json(data)
    })
  });

  // API POST Requests
  // ---------------------------------------------------------------------------
  app.post("/api/tables", function(req, res) {
    console.log(req.body)
    connection.query("SELECT * FROM tables WHERE waitList = false", (err, data) => {
      if(data.length >= 5){

        connection.query("INSERT INTO tables SET ?", {
          waitList: true,
          ...req.body
        }, (err, writeResult) => {
          res.json(false)
        })
      }
      else{
        connection.query("INSERT INTO tables SET ?", {
          waitList: false,
          ...req.body
        }, (err, writeResult) => {
          res.json(true)
        })
      }

    })
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!
  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    connection.query("DELETE * FROM tables", (err, data) => {
      res.json({ ok: true });
    })


  });
};
