var socket = io.connect( 'http://192.168.0.13:8080' );

$( "#messageForm" ).submit( function() {
	var nameVal = $( "#nameInput" ).val();
	var msg = $( "#messageInput" ).val();
	
	socket.emit( 'message', { name: nameVal, message: msg } );
	
	return false;
});

socket.on( 'message', function( data ) {
	var actualContent = $( "#messages" ).html();
	var newMsgContent = '<li> <strong>' + data.name + '</strong> : ' + data.message + '- (ID:' + data.newid + ')</li>';
	var content = newMsgContent + actualContent;
	
	$( "#messages" ).html( content );
});
