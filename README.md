## ToDo-App

A simple Todo application built with React and Node.js that
allowing user to manage their to-do list by adding new to-do items,
set a due date for every item, mark as done, edit and delete the items

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

## Installation

1. Clone the repository:
   - git clone https://github.com/TinaTang298/ToDo-App.git
   - cd ToDo-App
2. Install dependencies for the server:
   - cd server
   - npm install
3. Install dependencies for the client:
   - cd ../client
   - npm install

## Running the Application

1. Start the server:
   - cd server
   - node server.js
     (you will see on terminal: "Server is running on port 5000")
2. In a new terminal, start the client:
   - cd client
   - npm start
3. Open your browser and navigate to `http://localhost:3000` to use the application.

## Features

- Add new to-do items, set due date
- Edit to-do items and due date
- Mark to-do items as completed
- Delete to-do items
- View a list of all to-do items

## Technologies Used

- Front-end: React
- Back-end: Node.js with Express
- API Calls: Axios
