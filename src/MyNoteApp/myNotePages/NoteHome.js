/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { GrAdd } from "react-icons/gr";
import { NavLink, useNavigate } from "react-router-dom";
import SingleNote from "../myNoteCompos&Hooks/SingleNote";

const NoteHome = ({ notes }) => {
  const [searchText, setSearchText] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(notes);
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);

  const handleSearch = () => {
    let newNotes = notes.filter((item) =>
      item.title.toLowerCase().startsWith(searchText.toLowerCase())
    );

    if (searchText.length < 1) {
      newNotes = notes;
    }
    setFilteredNotes(newNotes);
  };

  useEffect(handleSearch, [searchText]);

  const checkScreenSize = () => {
    if (window.innerWidth > 600) {
      setShowSearch(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  });

  return (
    <div className="app">
      <div className={showSearch ? "noteHeader res" : "noteHeader"}>
        {!showSearch && <h1>My Notes</h1>}
        <div className="searchBar">
          {showSearch && (
            <input
              type="text"
              placeholder="Keyword..."
              className="searchInput"
              autoFocus
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          )}

          {!searchText ? (
            <button
              className="searchBtn"
              onClick={() => setShowSearch(!showSearch)}
            >
              <BsSearch />
            </button>
          ) : (
            <button
              className="searchBtn"
              onClick={() => {
                setFilteredNotes(notes);
                setSearchText("");
                navigate("/");
              }}
            >
              <AiOutlineClose />
            </button>
          )}
        </div>
      </div>

      <div className="noteBody">
        {filteredNotes.map((note) => {
          return <SingleNote {...note} key={note.id} />;
        })}
        <NavLink to="/make-a-note">
          <button className="addBtn">
            <GrAdd />
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default NoteHome;
