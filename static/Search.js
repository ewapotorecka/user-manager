export class Search {
	constructor( searchInput, suggestionsContainer ) {
		this.searchInput = searchInput;
		this.suggestionsContainer = suggestionsContainer;
	}

	activate() {
		this.searchInput.addEventListener( 'input', ( event ) => {
			this.generateSuggestions( event.target.value )
				.then( suggestions => this.renderSuggestions( suggestions ) );
		} );
		document.addEventListener( 'focusin', () => {
			if ( document.activeElement != this.searchInput ) {
				this.clearSuggestions();
				this.searchInput.value = '';
			}
		} );
	}

	// Changed generating suggestions to fetch
	generateSuggestions( value ) {
		if ( value.length === 0 ) {
			return Promise.resolve( [ 'Nothing to find' ] )

		} else {
			return fetch( `/api/users/${ value }` )
				.then( response => response.json() )
				.catch( error => console.log( error ) )
		}
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