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
$ npm start
```

## Installing Mongo Database

* Download [mongoDB](https://www.mongodb.com/download-center#community).  If running Windows 10, download the "Windows Server 2008 R2 64-bit and later" edition.
* To make it easy on you, after installation, add "C:\Program Files\MongoDB\Server\3.4\bin;" to the environment variables in the "PATH" key.
* On a command prompt, execute:

```console
$ mongod
```

* The mongo database should be started on port 27017.

## Script Commands

* start
  * Launches the restify server.

## References

* [NodeJS](http://nodejs.org/)
* [Restify](http://restify.com/)
* [Node-Colorify](https://www.npmjs.com/package/node-colorify)
* [Mongo.js](https://www.npmjs.com/package/mongojs)
