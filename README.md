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
### Installation

```node
npm install
```

## Build and Run
This should install all the necessary app and dev dependencies for the project. If everything works fine, run
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
