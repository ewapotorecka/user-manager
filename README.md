# USER MANAGER

Simple user manager with two sections:
* Search - search by name (ignores case sensitivity )
* Add new - with two sections: name and age

Add new is a form with JS validation. Adds data to fake db.
Used [express-rate-limit](https://www.npmjs.com/package/express-rate-limit) to limit the number of add requests.

### How to install and start

```
npm install
npm run server
```
Open http://localhost:3000/ at the browser.
