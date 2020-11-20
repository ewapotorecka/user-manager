# USER MANAGER

Simple user manager

## Sections:

### Search

- When user types the searched phrase, this component displays suggestions - elements from database, which name match searched phrase
- Search ignores case sensitivity
- When there are no matches to the searched phrase, component displays *Nothing found*
- When user deletes the searched phrase, component displays *Nothing to find*
- After focus on other element of application, suggestions and search input are cleared

### Add new user

 - Form with JS validation - both input fields are required
 - If one ore both inputs are empty, component shows error message, that disappears after 5 seconds and form is not submitted
 - When both input values are valid, component shows success message and data is added to fake db
 - Used [express-rate-limit](https://www.npmjs.com/package/express-rate-limit) to limit the number of add requests to 1 per 5 seconds
 - If user tries to add more than one user per 5 seconds, component shows error  message and form is not submitted

### How to install and start

```
npm install
npm run server
```
Open http://localhost:3000/ at the browser.
