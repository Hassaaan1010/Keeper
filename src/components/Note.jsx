import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>

      <button
        className="delete"
        name="delete"
        onClick={() => {
          props.delete(props.id);
        }}
      >
        DELETE
      </button>
      <button
        className="edit"
        name="edit"
        onClick={() => {
          props.editStart(props.id);
        }}
      >
        EDIT
      </button>
    </div>
  );
}

export default Note;
