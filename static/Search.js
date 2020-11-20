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
		document.addEventListener( 'focusin', () => {
			if ( document.activeElement != this.searchInput ) {
				this.clearSuggestions();
				this.searchInput.value = '';
			}
		} );
	}

	generateSuggestions( value ) {
		const suggestions = [];

		if ( value.length === 0 ) {
			suggestions.push( 'Nothing to find' );
		} else {
			for ( const user of this.users.data.people ) {
				if ( user.name.toLowerCase().includes( value.toLowerCase() ) ) {
					suggestions.push( user );
				}
			}
		}

		return suggestions;
	}

	renderSuggestions( suggestions ) {
		this.clearSuggestions();

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

		if ( suggestion ) {
			typeof( suggestion ) === 'string' ?
				suggestionElement.innerHTML = suggestion
				: suggestionElement.innerHTML = `${suggestion.name} - ${suggestion.age}`;
		} else {
			suggestionElement.innerHTML = 'Nothing found';
		}

		return suggestionElement;
	}

	clearSuggestions() {
		this.suggestionsContainer.innerHTML = '';
	}
}