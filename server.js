var express = require( 'express' ),
    config  = require( './config' );

var app = express();

var pub = __dirname + '/public';

app.use( express.static( pub ));

app.listen( config.port );
console.log( 'Site active at port ' + config.port );
