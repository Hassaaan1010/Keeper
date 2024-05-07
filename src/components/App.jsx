import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  let [noteList, setNoteList] = useState([
    { title: "asdf", content: "qwerty" },
    { title: "aksdnfdsjnfjs", content: "kasndnsa dajd asjdajdnj" },
  ]);
  const [formTitle, setTitle] = useState("");
  const [formContent, setContent] = useState("");
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

  function editNote(id, newTitle, newContent) {
    // setNoteList((prevValue) => {
    //   return prevValue[id] == { title: newTitle, content: newContent };
    // });
    setTitle(noteList[id].title);
    setContent(noteList[id].content);
  }

  return (
    <div>
      <Header />
      <CreateArea
        addNote={addNote}
        title={formTitle}
        content={formContent}
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
            edit={editNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
