const express = require( 'express' );
const app = express();
const port = 3000;
const path = require( 'path' );

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


app.get( '/', ( request, response ) => {
	response.sendFile( path.resolve( 'index.html' ), err => {
		if ( err ) {
			throw err;
		}
	} );
} );

app.get( '/api/db', ( request, response ) => {
	response.send( db ), err => {
		if ( err ) {
			throw err;
		}
	}
})

app.post('/submit-form', (req, res) => {
	const name = req.body.name
	console.log( name );
	res.end()
  })


app.listen( port, () => {
	console.log( 'Server is listening on port 3000' );
} );
