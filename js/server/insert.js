var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Kbbsrvrx12',
  database : 'sandaySchool'
});

function createChild(data) {
  connection.conect();

  connection.query(INSERT INTO , function repack(data) {
    console.log(data);
  });

  connection.end();
};

module.exports = createChild();
