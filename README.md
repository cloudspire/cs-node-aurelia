# IoT Shaman - Node JS / Aurelia Framework

This project contains minimalistic scaffolding for Node JS / Aurelia applications. 

## Project Structure
The structure of this project is broken into two groups: ``client`` and ``server``. 
The client folder contains the user-interface markup / logic, and is built on top of Typescript and Aurelia.
Everything outside the ``client`` folder is server code, containing the logic responsible for serving the files and processing requests from the client-side application.

## Requirements
Before building this project you will need to following resources:

- npm
- jspm
- typings

*JSPM and Typings can both be installed using npm.

## Instalation
First, open the project's root folder in a command terminal and type ``npm install``.

Next, open the ``client`` folder in the project root and enter the following commands:

- npm install
- jspm install -y
- typings install

## Starting the Server
To run, navigate to te project's root folder in a command terminal and type ``npm start``. it will run on port 4000 by default.

## Accessing the Application
To open the app, all you need to do is open a browser and go to the following URL: ``http://localhost:4000``.

## Compiling Typescript after modifying / creating .ts files
When you make any changes to a .ts file, or create one, you will need to compile them in order to view them in a browser. To accomplish this, simply navigate to the ``client`` folder in a command terminal, type ``gulp`` and click enter.