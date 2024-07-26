# Note Taking Application Assignment
## Objective
<p>Develop a simplified web application for taking notes that utilizes local storage for data persistence. This application will demonstrate front-end development skills including CRUD operations, pagination, and a responsive design.</p>

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
Local Storage:
Use the browser's local storage to create, read, update, and delete notes.
Store notes as an array of objects, each containing id, title, content, and timestamp.
Features:
CRUD Operations:
Create: Add new notes via a form.
Read: Fetch and display notes from local storage.
Update: Modify existing notes.
Delete: Remove notes permanently.
Pagination:
Implement pagination to manage and navigate through lists of notes, displaying 10 notes per page.
Search Functionality:
Provide a search bar to filter notes by title or content.
Timestamps:
Record and display the creation or last modification time for each note.
User Interface Design
List View: Displays the paginated list of notes with options to edit or delete, a search bar at the top, and a button to add new notes.
Note Item: Each note displays the title, a brief content excerpt, and the timestamp.
Note Form: A modal or dedicated page for adding or editing note details.



