import React from "react";
import { NavLink } from "react-router-dom";

const SingleNote = ({ title, moment, id, details }) => {
  return (
    <NavLink
      to={`/modify-a-note/${id}`}
      className="singleNote"
      state={{ title, details, moment, id }}
    >
      <h2>{title.length > 15 ? title.slice(0, 15) + "..." : title}</h2>
      <p>{moment}</p>
    </NavLink>
  );
};

export default SingleNote;
