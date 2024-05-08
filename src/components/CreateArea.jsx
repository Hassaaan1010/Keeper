import React, { useState } from "react";

function CreateArea(props) {
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          // controlling variable title
          onChange={(event) => {
            props.setTitle(event.target.value);
          }}
          value={props.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          // controlling variable content
          onChange={(event) => {
            props.setContent(event.target.value);
          }}
          value={props.content}
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            // if no Note is being edited, id is null
            if (props.id == null) {
              props.addNote({ title: props.title, content: props.content });
            } else {
              props.editEnd(props.id, props.title, props.content);
            }
            // reset Create Area to empty
            props.setTitle("");
            props.setContent("");
          }}
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
