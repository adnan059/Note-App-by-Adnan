import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./MyNoteApp.css";
import MakeANote from "./myNotePages/MakeANote";
import ModifyANote from "./myNotePages/ModifyANote";
import NoteHome from "./myNotePages/NoteHome";

const MyNoteApp = () => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes2")) || []
  );

  useEffect(() => {
    localStorage.setItem("notes2", JSON.stringify(notes));
  }, [notes]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NoteHome notes={notes} />} />
        <Route
          path="/make-a-note"
          element={<MakeANote setNotes={setNotes} />}
        />

        <Route
          path="/modify-a-note/:id"
          element={<ModifyANote notes={notes} setNotes={setNotes} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default MyNoteApp;
