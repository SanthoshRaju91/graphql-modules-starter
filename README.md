# Graphql-Modules starter

Development setup for GraphQL Modules.

This has support for typescript, with resolved type definition error when building the application for production.

Also, includes the 'reflect-metadata' fix, as discussed [TypeError: Reflect.hasMetadata is not a function](https://github.com/Urigo/graphql-modules/issues/183)

To start

1. Install dependencies `npm install` / `yarn install`
2. Start the server
   In DEV `yarn dev` / `npm run dev`
   In Prod `yarn start` / `npm start`

NOTE: In order to run your code in production always run `yarn build` / `npm run build` to compile the typescript code to Javascript before you run `yarn start` / `npm start`.
