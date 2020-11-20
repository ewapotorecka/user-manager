export class Users {
	constructor() {
	}

	async loadData() {
		fetch( '/api/db' )
			.then( response => response.json() )
			.then( data => { this.data = data } )
			.catch( error => console.log( error ) )
	}

	async addUser( newUser ) {
		fetch( '/api/db/add', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify( newUser )
		} )
			.then( response => {
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