import React, { useState } from "react";
import { AiOutlineBackward } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import useMakeDate from "../myNoteCompos&Hooks/useMakeDate";

const MakeANote = ({ setNotes }) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const moment = useMakeDate();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && details) {
      const newNote = { id: uuid(), title, details, moment };
      setNotes((prevNotes) => [newNote, ...prevNotes]);
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
      </div>

      <form className="makeNoteForm" onSubmit={handleSubmit}>
        <input
          type="text"
          autoFocus
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          rows="30"
          placeholder="Details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          required
        ></textarea>
      </form>
    </div>
  );
};

export default MakeANote;
