# ngAngular4 API

A simple API server.

## Adding new endpoints

 Within index.js, you can add more routes:

```javascript
server.get("users/", ...);
server.post("users/", ...);
```

 Within routes.js, you add the functionality for retrieving and sending the data from the database and connecting that functionality to the route in index.js.  Example:

```javascript
server.get("users/", route.getAllUsers);
```

## Running the server

In git bash (or any terminal), run the following command:

```console
npm start
```
