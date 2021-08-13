# Server ready to use template for ScaleDynamics platform

This template is configured for the ScaleDynamics platform. It is ready to use to build your own server/API. All is pre-configured: we provide one command to develop with live reload and one to deploy to make it live on a url.

Note that you need a ScaleDynamics account for deployment (create a FREE community account [here](https://console.scaledynamics.com/auth/signup/)).


## How to use

### Project setup

First, install the project dependencies

```sh
npm install
```

### Development and test

You can run the project with this command, the server is listening on port 3000 (change it as you want in `index.js`)

```shell
npm run start
```

To test it, you can use a postman client and make a request

`http:/localhost/movies?search=Star%20Trek`

#### Deploy with ScaleDynamics

Then use your ScaleDynamics account credential to log in to the platform (create a FREE community account [here](https://console.scaledynamics.com/auth/signup/))

```sh
npx warp login
```

Finally, use the deploy command

```sh
npm run deploy
```

Note that when running this command, you have to select an environment. An environment identifies the cloud execution environment to run your app. You can create as many as you want like ‘staging’, ‘demo’, ‘prod’... Each environment has its own url.

To deploy, select an existing environment or create a new one. For more details on projects or environments, see the [documentation](https://docs.scaledynamics.com).

After the deployment, open your postman client and made the request:

`https://YOUR_DOMAIN/movies?search=Star%20Trek`

## Template structure

This project is really simple. You have an `index.js` that initialize Express.js, a `mongodb.js` file that manage a connection to a database and a `movies.js` file that manage the endpoints to get movies data.

Regarding MongoDB, we provide a template module  in the `src/mongodb.js`. To use your own MongoDB instance, replace the `URI` constant by your own.

You can add live reload if you want by using library like `nodemon` or `node-livereload`.

For more specific project, you can add a [configuration file](https://docs.scaledynamics.com/docs/api/warp-config#server-config).

## Documentation

If you need more information, you can refer to the documentation:
  - [Express.js](https://expressjs.com/en/guide/routing.html)
  - [ScaleDynamics Platform](https://docs.scaledynamics.com/)
  - [MongoDB](https://docs.mongodb.com/guides/)

## License

Copyright 2021 ScaleDynamics SAS. All rights reserved.
Licensed under the MIT license.
