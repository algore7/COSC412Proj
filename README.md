# COSC412Proj
## Description
TODO

## Development Stack
frontend (React.js): web-cosc412proj   
backend (Python Django): svc_cosc412proj

## Project Dev Guide

### Requirements  
Before starting the development, install the python packages from the requirements.txt by running   
`pip3 install -r requirements.txt` on Linux & MacOS  
`pip install -r requirements.txt` on Windows  

### Recommended Workflow  
Each contributor should develop on his or her own branch to keep the master branch clean.  
A pull request can be created to merge into the master branch.  
Before the pull request, merge new changes from master branch and resolve conflicts.  

### Frontend
root folder: web-cosc412proj  
Before running the React project, make sure to install modules with `npm install`     
Created with `create-react-app`. Custom components can be found in the `src/components` folder  

### Backend
root folder: svc_cosc412proj  
Created with `django-admin startproject` command.

#### API Endpoints
`api/trivia_questions` - `GET` request returns all trivia questions in SQLite3 database

## Features
1. Trivia Game
