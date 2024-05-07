import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  let [noteList, setNoteList] = useState([]);

  function addNote(obj) {
    setNoteList((prevValue) => {
      return [...prevValue, obj];
    });
  }

  function deleteNote(id) {
    setNoteList((prevValue) => {
      return prevValue.filter((val, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {noteList.map((elem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={elem.title}
            content={elem.content}
            delete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
