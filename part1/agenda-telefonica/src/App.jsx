import React, { useState, useEffect } from 'react';
import Note from "./components/Note";
import noteService from './services/notes';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);


//cuando llama a noteService es para obtener todas las notas y se actualiza el estado notes con el resulrado
  useEffect(() => {
    noteService.getAll()
      .then(initialNotes => {
        setNotes(initialNotes);
      });
  }, []);
  console.log('render', notes.length, 'notes')
  //añade una nueva nota utilizando noteService.create
  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
    };
 //el componente App solo usa la propiedad response.data del objeto de respuesta
    noteService.create(noteObject)
      .then(returnedNote => {
        setNotes([...notes, returnedNote]);
         //limpia el input
        setNewNote('');
      });
  };
//manejar cambios en el input
  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const toggleImportanceOf = id => {
    const note = notes.find(n => n.id === id);
    const changedNote = { ...note, important: !note.important };

    noteService.update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote));
      })
      .catch(error => {
        alert(`The note '${note.content}' was already deleted from server`);
        setNotes(notes.filter(n => n.id !== id));
      });
  };

  const notesToShow = showAll ? notes : notes.filter(note => note.important === true);

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note =>
          <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input 
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>   
    </div>
  );
};

export default App;