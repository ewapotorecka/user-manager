export class Users {
	loadData() {
		return fetch( '/api/db' )
			.then( response => response.json() )
			.then( data => this.data = data )
			.catch( error => console.log( error ) )
	}

	addUser( newUser ) {
		return fetch( '/api/db/add', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify( newUser )
		} )
			.then( response => {
				if ( !response.ok ) {
					if ( response.status == 429 ) {
						console.error( `Can not add ${ newUser.name } to database, too many requests. Wait 5 seconds.`);
						throw new Error( `Can not add ${ newUser.name } to database, too many requests. Wait 5 seconds.` );
					} else {
						console.error( response.statusText );
						throw new Error( response.statusText );
					}
				}
				if ( response.ok ) {
					this.data.people.push( newUser );
					console.log( `Added ${ newUser.name } to database`)
				} else if ( response.status == 429 ) {
					console.log( `Can not add ${ newUser.name } to database, too many requests. Wait 5 seconds.`);
				} else {
					console.log( response.statusText )
				}
			} );
	}
}