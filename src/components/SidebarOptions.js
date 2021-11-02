import React, { useState } from "react";
import db from "./firebase";
import "./SidebarOptions.css";
import { Link } from "react-router-dom";

const SidebarOptions = ({ Icon, title, addClasses, id }) => {
  const AddClass = () => {
    const roomName = prompt("Enter Room Name:");
    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };
  return (
    <>
      {Icon ? (
        <div
          onClick={addClasses && AddClass}
          className="sidebarOptions"
        >
          <Icon />
          <h2>{title}</h2>
        </div>
      ) : (
        <Link to={`/rooms/${id}`}>
          <div className="sidebarOptions">
            <span>#</span>
            <h2> {title}</h2>
          </div>
        </Link>
      )}
    </>
  );
};

export default SidebarOptions;
