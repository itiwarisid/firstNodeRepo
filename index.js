var mysql = require('mysql');

var con = mysql.createConnection({
  host: "sql12.freemysqlhosting.net",
  user: "sql12357584",
  password: "tTDZTfLqv9",
  database: "sql12357584"
});
con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM test WHERE userId = 1", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });