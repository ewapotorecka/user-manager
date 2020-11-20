import { Form } from './Form.js';
import { Search } from './Search.js';
import { Users } from './Users.js';

const addForm = document.querySelector( '.add-form' );
const nameInput = document.querySelector( '.name-input' );
const ageInput = document.querySelector( '.age-input' );
const searchInput = document.querySelector( '.search-input' );
const suggestionsContainer = document.querySelector( '.suggestions-container' );
const messageContainer = document.querySelector( '.message-container' );

const users = new Users();
const form = new Form( addForm, nameInput, ageInput, messageContainer, users );
const search = new Search( searchInput, suggestionsContainer, users );

users.loadData().then( () => {
	form.activate();
	search.activate();
} );
