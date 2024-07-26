# Note Taking Application 

## Objective
<p>Develop a simplified web application for taking notes that utilizes local storage for data persistence. This application will demonstrate front-end development skills including CRUD operations, pagination, and a responsive design.</p>

## Demo Link-
https://note-taking-application-sandy.vercel.app


# Project Overview

## The "Simple Note Taking App" will allow users to:
1. Create new notes.

2. View all notes with pagination (10 notes per page).

3. Edit existing notes.

4. Delete notes.

5. Search through notes.

6. View notes with their respective timestamps.

## Technical Requirements
1. Front-End:

**Framework/Library**: Utilize React.js to leverage its efficient update and rendering capabilities for dynamic content like pagination and live search.

**UI Requirements**:

a. User-friendly interface for interacting with notes.

b. Real-time feedback for operations such as loading and input validation.

c. Responsive design to ensure usability across different devices.

2. Data Handling:
   
**Local Storage**:

a. Use the browser's local storage to create, read, update, and delete notes.

b. Store notes as an array of objects, each containing id, title, content, and timestamp.

## Features:

**CRUD Operations**:

1. Create: Add new notes via a form.

2. Read: Fetch and display notes from local storage.

3. Update: Modify existing notes.

4. Delete: Remove notes permanently.

## Pagination:

<p>Implement pagination to manage and navigate through lists of notes, displaying 10 notes per page.</p>

## Search Functionality:
<p>Provide a search bar to filter notes by title or content.</p>

## Timestamps:

<p>Record and display the creation or last modification time for each note.</p>

## User Interface Design:

1. **List View**: Displays the paginated list of notes with options to edit or delete, a search bar at the top, and a button to add new notes.

2. **Note Item**: Each note displays the title, a brief content excerpt, and the timestamp.

3. **Note Form**: A modal or dedicated page for adding or editing note details.


# Installation and Run:
  To run this project on your system follow the following steps:
  - Get the code on your system.
  - Open Terminal on your pc and go to the root folder of project.
  - Run the command 'npm install' in terminal to install all the dependencies required for the project.
  - After complete installation, run the command 'npm run start' in your terminal.
  - To see the output, serach for http://localhost:3000/ in your web browser.

# Tools Used:
  - Reactjs.
  - Redux toolkit.
  - React-router-dom.
  - JavaScript
  - HTML.


