# Savaged.us Open Source Components

This is one of the family of open-sourced components for Savaged.us.

## The Savaged.us Open Source Projects

* Common: https://github.com/jdgwf/savaged-us-common
* React Front End: https://github.com/jdgwf/savaged-us-react
* PDFS (React): https://github.com/jdgwf/savaged-us-pdfs
* Public facing images and content: https://github.com/jdgwf/savaged-us-public
* Web Client "Working" Project: https://github.com/jdgwf/savaged-us-client (includes submodules to above)

## To the future
There's a possibility that it'll be moving at least the Common core to .wasm using Rust as the development language. This project is also open source.

https://github.com/jdgwf/savaged-us-rust-libs

## Client
The client build process compiles the React app located in `/src/client` into a bundled located at `/public/js/app.js`.

The client configuration will also build the Sass files found at `/src/scss`. The App component imports the `app.scss` file which already includes an import for Bootstrap.

## Running the project
In order to run the server, use `npm run dev`, and the server will start on port 5000 (http://localhost:5000).

Webpack is intended to watch the files (though this isn't quite working on this project). Once you save a file, you can refresh your browser to ensure you got the updated client files.
