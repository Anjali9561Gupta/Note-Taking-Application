import React from 'react';
import NoteItem from './NoteItem';

const NoteList = ({ notes, updateNote, deleteNote }) => {
  return (
    <div className="note-list">
      {notes.map(note => (
        <NoteItem
          key={note.id}
          note={note}
          updateNote={updateNote}
          deleteNote={deleteNote}
        />
      ))}
    </div>
  );
};

export default NoteList;