export class Form {
	constructor( form, nameInput, ageInput, messageContainer ) {
		this.form = form;
		this.nameInput = nameInput;
		this.ageInput = ageInput;
		this.messageContainer = messageContainer;
	}

	activate() {
		this.form.addEventListener( 'submit', ( event ) => {
			event.preventDefault();

			// separated validation for nameInput and ageInput
			if ( !this.validateInput( this.nameInput ) ) {
				this.showMessage( 'error', 'ERROR: Name or age not defined' );
			} else if ( !this.validateInput( this.ageInput ) ) {
				this.showMessage( 'error', 'ERROR: Name or age not defined' );
			} else {
				const user = {
					name: this.nameInput.value,
					age: this.ageInput.value
				};

				this.addNewUser( user )
					.then( () => {
						this.clearForm();
						this.showMessage( 'success', 'SUCCESS: Added to DB' );
					} )
					.catch( ( error ) => {
						this.showMessage( 'error', error.message );
					} );
			}
		} );
	}
	// added fetch instead of using users class
	addNewUser( user ) {
		return fetch( '/api/db/add', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify( user )
			} )
			.then( response => {
				if ( !response.ok ) {
					if ( response.status == 429 ) {
						console.error( `Can not add ${ user.name } to database, too many requests. Wait 5 seconds.`);
						throw new Error( `Can not add ${ user.name } to database, too many requests. Wait 5 seconds.` );
					} else {
						console.error( response.statusText );
						throw new Error( response.statusText );
					}
				}
				if ( response.ok ) {
					console.log( `Added ${ user.name } to database`)
				}
			} );
	}

	clearForm() {
		this.nameInput.value = '';
		this.ageInput.value = '';
	}

	validateInput( input ) {
		if ( input.value.length === 0 ) {
			return false;
		} else {
			return true;
		}
	}

	showMessage( type, content ) {
		const message = document.createElement( 'DIV' );

		message.innerHTML = content;

		if ( type == 'error' ) {
			message.setAttribute( 'class', 'error-message' );
		} else if ( type = 'success' ) {
			message.setAttribute( 'class', 'success-message' );
		}

		this.messageContainer.appendChild( message );
		setTimeout( () => this.messageContainer.removeChild( message ), 5000 );
	}
}

