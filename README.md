# dojo-bootstrap-map-js

An application boilerplate demonstrating how to use the Esri [ArcGIS API for JavaScript](//js.arcgis.com) with [Bootstrap Map](//github.com/Esri/bootstrap-map-js) and [Dojo Bootstrap](//github.com/xsokev/Dojo-Bootstrap) to create a responsive mapping application using [Bootstrap](//getbootstrap.com) components.

[View it live](http://esri.github.io/dojo-bootstrap-map-js/)

![App Screenshot](https://raw.githubusercontent.com/Esri/dojo-bootstrap-map-js/master/dojo-bootstrap-map-js.png)

This boilerplate is ideal for mobile applications because it provides the responsive UI of Bootstrap without the overhead of loading all of jQuery. Furthermore, you can run a Dojo build to optimize all of the JavaScript and CSS source code and dependencies to get a roughly 95% reduction in number of requests for scripts and 25% reduction in the size of those scripts.

This application boilerplate demonstrates how to build a mapping application that utilizes the best parts of Dojo (AMD modules, classes and widgets, promises, i18n, custom builds, etc) along with the responsive UI of Bootstrap. For simpler examples of how to get started with [Bootstrap Map](//github.com/Esri/bootstrap-map-js) and [Dojo Bootstrap](//github.com/xsokev/Dojo-Bootstrap), see the [Boostrap Map demo pages](http://esri.github.io/bootstrap-map-js/demo/dojo/getstarted.html).

## Instructions

By default, this boilerplate assumes you will want to work from local copies of all dependencies so that you can create a custom build. However, you can also work off of remotely hosted (CDN) dependencies by using `nobuild.html`.

### Quick Start

1. [Download](https://github.com/Esri/dojo-bootstrap-map-js/archive/master.zip) or [Fork and clone the repo](https://help.github.com/articles/fork-a-repo)
2. Make sure the `dojo-bootstrap-map-js` folder is served via your local web server
3. Load `src/index.html` in your browser

### Downloading Dependencies and Building

You will need to install [Node](http://nodejs.org/), [Bower](http://bower.io/), and [Grunt](http://gruntjs.com/) in order to download dependencies and build the app via the command line.

1. [Fork and clone the repo](https://help.github.com/articles/fork-a-repo)
2. `cd` into the `dojo-bootstrap-map-js` folder
3. Run `npm install` to install the Grunt tasks
4. Run `bower install` to download Dojo and other dependencies
5. Run `grunt slurp` to download the Esri JSAPI
6. Run `grunt serve` to load the unbuilt app into a web browser
7. Modify the code as needed
8. Run `grunt build` to build the app under the `dist` folder
9. Run `grunt serve:build` to load the built app into a web browser

You may want to run `grunt clean:deploy` to remove all uncompressed javascript and source maps before you deploy the contents of that folder to your web server.

## Requirements

* Notepad or your favorite text editor
* Web browser with access to the Internet
* [Node](http://nodejs.org/), [Bower](http://bower.io/), and [Grunt](http://gruntjs.com/) to run the command line development tools
* Java, in order to build Dojo.

## Example Applications

Below are a few example applications that have been built using this boilerplate:

* Demo for DevSummit 2015, [responsive-citizens](http://tomwayson.github.io/responsive-citizens/), a responsive take on the Attribute editing - mobile sample. [Github repo](https://github.com/tomwayson/responsive-citizens).
* San Juan County GIS,  [traffic-collisions-app](http://sjcgis.github.io/traffic-collisions-app/), A web application showing traffic collisions in San Juan County. Filterable by island and severity. [Github repo](https://github.com/SJCGIS/traffic-collisions-app)
* City of Menlo Park, [General Plan Review](http://arcgis.github.io/menlo-park-general-plan-review/src/), a wep application that allows users to dynamically modify the proposed general plan and view the impact on a map and chart.

## Resources

* [Bootstrap Map](//github.com/Esri/bootstrap-map-js)
* [Dojo Bootstrap](//github.com/xsokev/Dojo-Bootstrap)
* [ArcGIS API for JavaScript](//js.arcgis.com)
* [Bootstrap](//getbootstrap.com)
* [ArcGIS Blog](http://blogs.esri.com/esri/arcgis)
* [twitter@esri](http://twitter.com/esri)

## Issues

Find a bug or want to request a new feature?  Please let us know by submitting an issue.

## Contributing

Anyone and everyone is welcome to contribute.

## Licensing
Copyright 2012 Esri

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the license is available in the repository's [license.txt](https://raw.github.com/Esri/dojo-bootstrap-map-js/master/license.txt) file.

[](Esri Tags: ArcGIS Web Mapping Bootstrap)
[](Esri Language: JavaScript)​
