
var GridStream = require('../lib/GridStream');
var GridFS = require('../lib/GridFS');


var FS = new GridFS('test');

var FStream = new GridStream(FS,'test','w+',function(err, GridStream){
	
	setTimeout(function(){
		GridStream.close();
		console.log('Closed');
	},1000);
});