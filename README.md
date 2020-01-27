# Savaged.US 2.0
This is the open-source rewrite of the Savaged.us client in React/Node/Typescript

## Server
The server build process compiles the TypeScript files found in `/src/server` into a single bundled JavaScript file located in the `/bin` directory.

## Client
The client build process compiles the React app located in `/src/client` into a bundled located at `/public/js/app.js`.

The client configuration will also build the Sass files found at `/src/scss`. The App component imports the `app.scss` file which already includes an import for Bootstrap.

## Running the project
In order to run the server, use `npm run dev`, and the server will start on port 5000 (http://localhost:5000).

Webpack will watch the files. Once you save a file, you can refresh your browser to ensure you got the updated client files. If you only change server files, you *shouldn't* need to refresh.

## .env server environment variables
This server uses environment variables for connecting to the database and setting which port to listen on. Copy .env-sample to .env and edit to your local server settings. This is the access point for all server constant configuration variables.

## On a Headless Ubuntu Server
Puppeteer (which uses a headless chrome) requires the following libs: libxss1
Install via: `sudo apt-get install libxss1`
