#Websensors
A quick proof of concept using AppJS and the Firefox-Mobile Device-API to read some of the sensors in a 
smartphone and display them in a nice webapp.

Tested on Firefox for Android on 5.1.1.

##Usage
You don't need anything to have installed on your development machine, for copying the files to your phone adb is quite
useful, but you can use your file manager of choice, aswell. On your phone you need the latest firefox browser to open
the index.html file.
###ADB
To get the files on your phone you can use the Android Debugging Bridge, it can be found in the Android-SDK in the 
/sdk/plattform-tools folder. It is advisable to first make a new directory on your phone where you will copy all the files,
now you can copy the files via the command:

```
adb push Websensors /sdcard/[YOUR FOLDER NAME]
```

##Files
- index.html: main HTML file which loads the different librarys and which provides the UI
- pages.js: javascript file for handling page-clicks and reading the specified sensor data
- styles.css: used to style the compass image on the "Device Orientation" page

##API-Documentations
###AppJS
AppJS is used for creating the UI, it is a lightweight, fast but at the same time pretty easy library for creating mobile
webapps. The original documenation can be found on [appjs.com](http://appjs.com/). But my app is mainly based on the 
documenation by the people of "Kik interactive" which is (in my opinion) far more structured and detailed. It can be 
found on their website [code.kik.com/app/2/docs.html](http://code.kik.com/app/2/docs.html).
###Mozilla Webapp-Framework
The device-API was created by mozilla to push their own mobile OS, Firefox OS. But it also runs on all other major mobile
plattforms, but some parts only in the firefox browser. The official documentations can be found on 
[developer.mozilla.org/en-US/docs/Web/API](https://developer.mozilla.org/en-US/docs/Web/API) (look for APIs starting with
"Device"). A really extensive tutorial can be found on 
[mobiforge.com/design-development/sense-and-sensor-bility-access-mobile-device-sensors-with-javascript](https://mobiforge.com/design-development/sense-and-sensor-bility-access-mobile-device-sensors-with-javascript).

