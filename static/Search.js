export class Search {
	constructor( searchInput, suggestionsContainer, users ) {
		this.searchInput = searchInput;
		this.suggestionsContainer = suggestionsContainer;
		this.users = users;
	}

	activate() {
		this.searchInput.addEventListener( 'input', ( event ) => {
			const suggestions = this.generateSuggestions( event.target.value );
			this.renderSuggestions( suggestions );
		} );
	}

	generateSuggestions( value ) {
		const suggestions = [];

		for ( const user of this.users.data.people ) {
			if ( user.name.toLowerCase().includes( value.toLowerCase() ) ) {
				suggestions.push( user );
			}
		}

		return suggestions;
	}

	renderSuggestions( suggestions ) {
		this.clearSuggestions();

		console.log( suggestions)

		if ( suggestions.length === 0 ) {
			const suggestionElement = this.renderSuggestion();
			this.suggestionsContainer.appendChild( suggestionElement );
		};
		for ( const suggestion of suggestions ) {
			const suggestionElement = this.renderSuggestion( suggestion );
			this.suggestionsContainer.appendChild( suggestionElement );
		};
	}

	renderSuggestion( suggestion ) {
		const suggestionElement = document.createElement( 'DIV' );

		suggestion ? suggestionElement.innerHTML = `${suggestion.name} - ${suggestion.age}` : suggestionElement.innerHTML = 'Nothing found';

		return suggestionElement;
	}

	clearSuggestions() {
		this.suggestionsContainer.innerHTML = '';
	}



}