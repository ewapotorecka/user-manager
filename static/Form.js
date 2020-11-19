export class Form {
	constructor( form, nameInput, ageInput, users ) {
		this.form = form;
		this.nameInput = nameInput;
		this.ageInput = ageInput;
		this.users = users;
	}

	activate() {
		this.form.addEventListener( 'submit', ( event ) => {
			event.preventDefault();
			const user = {
				name: this.nameInput.value,
				age: this.ageInput.value
			}
			this.addNewUser( user );
			this.clearForm();
		} );
	}

	addNewUser( user ) {
		this.users.addUser( user );
	}

	clearForm() {
		this.nameInput.value = '';
		this.ageInput.value = '';
	}
}

