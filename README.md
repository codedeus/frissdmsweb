# FRISS Web
Frontend application for the FRISS Document Management System. An application for uploading, viewing and downloading uploaded documents.

## Setup and installation
### Requirements
```
node
npm
python2.7
msbuild build tools
```

If you run into issues with node-sass or node-gyp, try installing msbuild tools with ```npm install --global --production windows-build-tools```

### Installation
This should install all the necessary app and dev dependencies for the project.
```node
npm install
npm install -g gulp
```
If everything works fine, run

## Build and Run

```gulp
gulp build
gulp serve
```
The base api url is configured in ```\src\app\app.constants.js```. Currently it is set to point to ```https://localhost:9001/api/```.
Change it if the API is running on a differnt port number.

To run the unit test, run
```gulp
gulp test
```
