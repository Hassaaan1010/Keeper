import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  let [noteList, setNoteList] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [id, setId] = useState(null);
  function addNote(obj, edit = false) {
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

  function editNoteStart(id) {
    setId(id);
    setTitle(noteList[id].title);
    setContent(noteList[id].content);
  }

  function editNoteEnd(id, newTitle, newContent) {
    setNoteList((prevValue) => {
      prevValue[id] = {
        title: newTitle,
        content: newContent,
      };
      return prevValue;
    });
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
        setId={setId}
        setTitle={setTitle}
        setContent={setContent}
      />
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
