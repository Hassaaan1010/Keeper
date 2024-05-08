import React, { useState } from "react";

function CreateArea(props) {
  const [edited, setEdited] = useState(false);

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={props.title}
          onChange={(event) => {
            props.setTitle(event.target.value);
          }}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={props.content}
          onChange={(event) => {
            props.setContent(event.target.value);
          }}
        />
        <button
          id="addButton"
          onClick={(event) => {
            event.preventDefault();
            if (props.id == null) {
              props.addNote(
                { title: props.title, content: props.content },
                edited
              );
            } else {
              props.editEnd(props.id, props.title, props.content);
            }
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
