import React, { useState } from "react";

function CreateArea(props) {
  let [inputTitle, setInputTitle] = useState("");
  let [inputText, setInputText] = useState("");

  function handleChangeTitle() {
    setInputTitle(event.target.value);
  }

  function handleChangeText() {
    setInputText(event.target.value);
  }

  function handleEnter(event) {
    console.log(event.key || "hello");
    if (event.key === "") {
      document.getElementById("addButton").click();
    }
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChangeTitle}
          name="title"
          placeholder="Title"
          value={inputTitle}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={inputText}
          onChange={handleChangeText}
        />
        <button
          id="addButton"
          onClick={(event) => {
            event.preventDefault();
            props.addNote({ title: inputTitle, content: inputText });
            setInputTitle("");
            setInputText("");
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
