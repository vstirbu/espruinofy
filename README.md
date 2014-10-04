# espruinofy

Browserify plugin for creating an [Espruino](http://www.espruino.com) runnable bundle from a [node](http://nodejs.org/)-style application.

## Install

```sh
npm install espruinofy
```

## How to use

Don't forget to ```-ignore``` the Espruino specific packages:

```sh
browserify -p espruinofy yourApp.js > bundle.js
```

Then load the resulting bundle in Espruino's WebIDE and push it to the device.

Restart the device and you are good to go...
