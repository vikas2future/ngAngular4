# ngAngular4 API
A simple API server.

## Adding new endpoints
1. Within index.js, you can add more routes:
```
server.get("users/", ...);
server.post("users/", ...);
```
2. Within routes.js, you add the functionality for retrieving and sending the data from the database and connecting that functionality to the route in index.js.  Example:
```
server.get("users/", route.getAllUsers);
```

## Running the server
1. In git bash (or any terminal), run the following command:
```
npm start
```
