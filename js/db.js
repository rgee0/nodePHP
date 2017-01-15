var mysql = require( 'mysql' );

var pool = mysql.createPool({
	connectionLimit : 10,
	host			: '',
	user			: '',
	password		: '',
	database		: '',
	multipleStatements: true
});

module.exports = pool;