const express = require( 'express' );
const app = express();
const port = 3000;
const path = require( 'path' );
const rateLimit = require( 'express-rate-limit' );

const limiter = rateLimit( {
	windowMs: 1 * 5 * 1000,
	max: 1,
	message: 'Too many requests, wait 5 seconds'
} );

const db = {
	people: [
	  { name: 'John', age: 27 },
	  { name: 'Jack', age: 19 },
	  { name: 'Mack', age: 51 },
	  { name: 'Sasin', age: 70 },
	  { name: 'Richard', age: 34 },
	  { name: 'Andrew', age: 42 },
	]
};

app.use( '/static', express.static( './static/' ) );
app.use( '/api/db/add', limiter );
app.use( express.json() );

app.get( '/', ( request, response ) => {
	response.sendFile( path.resolve( 'index.html' ), err => {
		if ( err ) {
			throw err;
		}
	} );
} );

app.get( '/api/users/:query', ( request, response )  => {
	let result = [];

	for ( const user of db.people ) {
		if ( user.name.toLowerCase().includes( request.params.query.toLowerCase() ) ) {
			result.push( user );
		}
	}

	response.send( result ), err => {
		if ( err ) {
			throw err
		}
	}

} );

app.post( '/api/db/add', ( request, response ) => {
	request.body.age = parseInt( request.body.age );
	db.people.push( request.body );

	response.send( `Added user ${ request.body.name } to db `), err => {
		if ( err ) {
			throw err;
		}
	}
} );

app.listen( port, () => {
	console.log( 'Server is listening on port 3000' );
} );
