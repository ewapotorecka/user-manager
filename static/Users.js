export class Users {
	constructor() {
	}

	async loadData() {
		fetch( '/api/db' )
			.then( response => response.json() )
			.then( data => { this.data = data } )
			.catch( error => console.log( error ) )
	}

	addUser( newUser ) {
		this.data.people.push( newUser );
	}
}