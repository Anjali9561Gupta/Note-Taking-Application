import React, { useState } from 'react';

const NoteItem = ({ note, updateNote, deleteNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const handleUpdate = () => {
    const updatedNote = { ...note, title, content, timestamp: new Date().toLocaleString() };
    updateNote(updatedNote);
    setIsEditing(false);
  };

  return (
    <div className="note-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
          <small>{note.timestamp}</small>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
      <button onClick={() => deleteNote(note.id)}>Delete</button>
    </div>
  );
};

export default NoteItem;