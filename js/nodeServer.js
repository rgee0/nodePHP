const util = require( 'util' );

var socket = require( 'socket.io' );
var express = require( 'express' );
var http = require( 'http' );
var mysql = require( 'mysql' );

var pool = require('./db');
var app = express();
var server = http.createServer( app );
var io = socket.listen( server );

io.sockets.on( 'connection', function( client ) {
		
	client.on( 'message', function( data ) {
		
		console.log( util.inspect(data));
	
		var sqlToGo = "SET @newid = 0; CALL usp_user_newRequest(?,?, @newid); SELECT @newid AS newid;";
		var inserts = [data.name, data.message];
		
		sqlToGo = mysql.format(sqlToGo,inserts);
		
		pool.query(sqlToGo, function(err,result){
			if(err) throw err;

			io.sockets.emit( 'message', { name: data.name, message: data.message, newid: result[2][0].newid } );
		});
	});
});

server.listen( 8080 );