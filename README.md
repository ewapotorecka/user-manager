# USER MANAGER

A simple user manager application that uses a fake database.

## Components:

### Search
A component, that allows searching users from the database. It meets the criteria bellow:
- When a user types the searched phrase, this component displays suggestions - elements from database, which name matches the searched phrase
- Search ignores case sensitivity
- When there are no matches to the searched phrase, the component displays *Nothing found*
- When a user deletes the searched phrase, the component displays *Nothing to find*
- When another element is focused, suggestions and search input are cleared

### Add new user
A component, that allows adding users to the database. It meets the criteria below:
 - A form with JS validation - both input fields are required
 - If one ore both inputs are empty, the component shows an error message, that disappears after 5 seconds and the form is not submitted
 - When both input values are valid, the component shows the success message and the data is added to the fake database
 - If a user tries to add more than one user per 5 seconds, the component shows an error message and the form is not submitted. Under the hood it uses [express-rate-limit](https://www.npmjs.com/package/express-rate-limit) on the backend, that limits requests to 1 per 5 seconds.

### How to install and start

```
npm install
npm run server
```
Open http://localhost:3000/ at the browser.
