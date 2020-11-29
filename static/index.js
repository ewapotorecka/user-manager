import { Form } from './Form.js';
import { Search } from './Search.js';

const addForm = document.querySelector( '.add-form' );
const nameInput = document.querySelector( '.name-input' );
const ageInput = document.querySelector( '.age-input' );
const searchInput = document.querySelector( '.search-input' );
const suggestionsContainer = document.querySelector( '.suggestions-container' );
const messageContainer = document.querySelector( '.message-container' );

const form = new Form( addForm, nameInput, ageInput, messageContainer );
const search = new Search( searchInput, suggestionsContainer );

form.activate();
search.activate();