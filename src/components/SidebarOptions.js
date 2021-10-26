import React, { useState } from "react";
import db from "./firebase";
import "./SidebarOptions.css";

const SidebarOptions = ({ Icon, title, addClasses }) => {
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
        <div onClick={addClasses && AddClass} className="sidebarOptions">
          <Icon />
          <h2>{title}</h2>
        </div>
      ) : (
        <div className="sidebarOptions">
          <span>#</span>
          <h2> {title}</h2>
        </div>
      )}
    </>
  );
};

export default SidebarOptions;
