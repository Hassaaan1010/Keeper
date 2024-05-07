import React, { useState } from "react";

function CreateArea(props) {
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={props.title}
          onChange={(event) => {
            props.setTitle(event.target.value);
            setEdited(true);
          }}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={props.content}
          onChange={(event) => {
            props.setContent(event.target.value);
            setEdited(true);
          }}
        />
        <button
          id="addButton"
          onClick={(event) => {
            event.preventDefault();
            props.addNote({ title: props.title, content: props.content });
            props.setTitle("");
            props.setContent("");
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
