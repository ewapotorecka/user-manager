export class Form {
	constructor( form, nameInput, ageInput, messageContainer, users ) {
		this.form = form;
		this.nameInput = nameInput;
		this.ageInput = ageInput;
		this.users = users;
		this.messageContainer = messageContainer;
	}

	activate() {
		this.form.addEventListener( 'submit', ( event ) => {
			event.preventDefault();

			if ( !this.validateInput( this.nameInput ) || !this.validateInput( this.ageInput ) ) {
				this.showMessage( 'error' );
			} else {
				const user = {
					name: this.nameInput.value,
					age: this.ageInput.value
				}
				this.addNewUser( user )
					.then( () => {
						this.clearForm();
						this.showMessage( 'success' );
					} );

			}

		} );
	}

	async addNewUser( user ) {
		this.users.addUser( user );
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

	showMessage( type ) {
		const message = document.createElement( 'DIV' );

		if ( type == 'error' ) {
			message.setAttribute( 'class', 'error-message' );
			message.innerText = 'ERROR: Name or age not defined';
		} else if ( type = 'success' ) {
			message.setAttribute( 'class', 'success-message' );
			message.innerText = 'SUCCESS: Added to DB';
		}

		this.messageContainer.appendChild( message );
		setTimeout( () => this.messageContainer.removeChild( message ), 4000 );
	}
}

