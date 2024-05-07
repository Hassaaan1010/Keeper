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
          onClick={(event) => {
            event.preventDefault();
            props.addNote({ title: inputTitle, content: inputText });
            console.log(1);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
