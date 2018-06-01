var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Kbbsrvrx12',
  database : 'sandaySchool'
});

function createChild() {
  connection.connect();

  
}
