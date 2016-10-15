# Cloudspire Aurelia Framework

This project contains minimalistic scaffolding for Node JS / Aurelia applications. 

## Project Structure
The structure of this project is broken into two groups: ``client`` and ``server``. 
The client folder contains the user-interface markup / logic, and is built on top of Typescript and Aurelia.
The server folder contains the logic responsible for serving the files and processing requests from the client-side application.

## Requirements
Before building this project you will need to following resources:

- npm
- jspm
- typings

*JSPM and Typings can both be installed using npm.

## Instalation
First, open the ``client`` folder in the project root and enter the following commands:

- npm install
- jspm install -y
- typing install

Nexy, open the ``server`` folder in the project root and type ``npm install``

## Starting the Server
To run, open the ``server`` folder and type ``npm start``. it will run on port 4000 by default.

## Accessing the Application
To open the app, all you need to do is open a browser and go to the following URL: ``http://localhost:4000``.