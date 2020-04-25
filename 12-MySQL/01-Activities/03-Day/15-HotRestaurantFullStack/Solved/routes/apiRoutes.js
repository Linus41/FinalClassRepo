// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app, connection) {
  // API GET Requests
  // ---------------------------------------------------------------------------

  app.get("/api/tables", function (req, res) {
    connection.query("SELECT * FROM tables WHERE seated = true", (err, data) => {
      res.json(data)
    })
  });

  app.get("/api/waitlist", function (req, res) {
    connection.query("SELECT * FROM tables WHERE seated = false", (err, data) => {
      res.json(data)
    })
  });

  // API POST Requests
  // ---------------------------------------------------------------------------
  app.post("/api/tables", function (req, res) {
    console.log(req.body)
    connection.query("SELECT COUNT(id) FROM tables WHERE seated = true", (err, data) => {
      console.log(data)
      const count = data[0]['COUNT(id)']
      connection.query("INSERT INTO tables SET ?", {
        seated: count >= 5 ? false : true,
        ...req.body
      }, (err, writeResult) => {
        res.json(count <= 5)
      })
    })
  });

  // API DELETE Requests
  // -----------------------------------------------------------------------
  app.delete("/api/tables/:id", function (req, res) {
    console.log(req.params)
    connection.query("DELETE FROM tables WHERE id = ?", req.params.id, (err, data) => {
      console.log(data)
      res.json(data);
    })
  });

  // API PUT Requests
  // -----------------------------------------------------------------------
  app.put("/api/seat/:id", function (req, res) {
    console.log(req.params)
    connection.query("SELECT COUNT(id) FROM tables WHERE seated = true", (err, data) => {
      console.log(data)
      const count = data[0]['COUNT(id)']
      if (count >= 5) {
        res.json(false)
      }
      else {
        connection.query("UPDATE tables SET seated = true WHERE id = ?", req.params.id, (err, seatedData) => {
          console.log(seatedData)
          res.json(true)
        })
      }

    })
  });


  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!
  app.post("/api/clear", function (req, res) {
    // Empty out the arrays of data
    connection.query("DELETE FROM tables", (err, data) => {
      res.json({ ok: true });
    })


  });
};
