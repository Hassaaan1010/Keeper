import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  // List of Note objects to keep track of all notes
  const [noteList, setNoteList] = useState([]);

  // separated title and content state so that changeState functionality
  // can be passed to different elements in the CreateArea component
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // id state for editing functionality in CreateArea component.
  // when id is null, CreateArea functions as note Adder
  // when id has value assigned, CreateArea functions as note Editor
  const [id, setId] = useState(null);

  // add item to list
  function addNote(obj) {
    setNoteList((prevValue) => {
      return [...prevValue, obj];
    });
  }

  // delete item from list
  function deleteNote(id) {
    setNoteList((prevValue) => {
      return prevValue.filter((val, index) => {
        return index !== id;
      });
    });
  }

  // edit start renders the CreateArea component with the title and content of the Note to be edited
  // called by EDIT button click in Note component
  function editNoteStart(id) {
    //changing id state to use use CreateArea for editing notes instead of adding
    setId(id);
    setTitle(noteList[id].title);
    setContent(noteList[id].content);
  }

  // performs the edit operation to the list
  // called by SAVE button click in CreateArea component
  function editNoteEnd(id, newTitle, newContent) {
    setNoteList((prevValue) => {
      prevValue[id] = {
        title: newTitle,
        content: newContent,
      };
      return prevValue;
    });
    //reset id to null to use CreateArea for adding notes instead of editing
    setId(null);
  }

  return (
    <div>
      <Header />
      <CreateArea
        addNote={addNote}
        editEnd={editNoteEnd}
        id={id}
        title={title}
        content={content}
        setTitle={setTitle}
        setContent={setContent}
      />
      {/* render all notes in noteList */}
      {noteList.map((elem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={elem.title}
            content={elem.content}
            delete={deleteNote}
            editStart={editNoteStart}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
