# Journal App

## Overview

This Journal App is created for Chingu Voyage 11 pre-work. It is a Full Stack application/Journal App that lets you login and create/log your digital journal.

#### View App: http://chingu-prework-journalapp.herokuapp.com/notes

## Features

* An online digital journal app that allows users to create online Digital Journals
* Allows an user to create a local account or sign in remotely with Google OAuth.
* All notes are synced with database and notes are never lost.
* Allows an user to create a new note.
* Allows an user to delete an existing note.
* Allows an user to edit an existing note.

## Running the project

1.  Clone this project locally
2.  CD into the project
3.  Run npm install in your bash/command line to install dependencies
4.  Update project name and description in `package.json`
5.  Create two postgres databases (`MY_APP_NAME` should match the `name`
    parameter in `package.json`)
6.  Run npm run seed your bash/command line to populate database with tables and sample users
7.  Run npm run start-dev to launch the app
8.  Browser to localhost:8080 to view the app

## Tech Used / Dependencies

* Node, Express, Sequelize - Backend
* React, Redux, React-Router - Frontend
* Postgres - DB
* Passport Google OAuth - Authentication
* Bootstrap Theme Template - [Bootswatch](https://bootswatch.com)
* Project Boilerplate - [Fullstack Academy Boilerplate](https://github.com/FullstackAcademy/boilermaker)
