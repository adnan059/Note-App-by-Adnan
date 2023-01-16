import React, { useState } from "react";
import { AiOutlineBackward } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import useMakeDate from "../myNoteCompos&Hooks/useMakeDate";
const ModifyANote = ({ notes, setNotes }) => {
  const location = useLocation();
  const moment = useMakeDate();
  const [title, setTitle] = useState(location.state.title);
  const [details, setDetails] = useState(location.state.details);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && details) {
      const newNote = { id: uuid(), moment, details, title };

      const noteToBeEdited = notes.find(
        (item) => item.id === location.state.id
      );

      const restNotes = notes.filter((item) => item.id !== noteToBeEdited.id);

      setNotes([newNote, ...restNotes]);

      navigate("/");
    }
  };

  const handleDelete = () => {
    if (window.confirm("You want to delete it?")) {
      const newNotes = notes.filter((item) => item.id !== location.state.id);
      setNotes(newNotes);
      navigate("/");
    }
  };

  return (
    <div className="makeANote">
      <div className="makeNoteHead">
        <AiOutlineBackward
          className="makeNoteIcon"
          onClick={() => navigate("/")}
        />

        <button onClick={handleSubmit}>Save</button>
        <RiDeleteBin6Line className="makeNoteIcon" onClick={handleDelete} />
      </div>

      <form className="makeNoteForm" onSubmit={handleSubmit}>
        <input
          type="text"
          autoFocus
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          rows="30"
          placeholder="Details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </form>
    </div>
  );
};

export default ModifyANote;
