import { Avatar } from "@mui/material";
import React from "react";
import "./Header.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useStateValue } from "./StateProvider";

const Header = () => {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">
      <div className="header_left">
        <Avatar src={user.photoURL} />
        <AccessTimeIcon className="header_leftIcon" />
      </div>
      <div className="header_search">
        <SearchIcon />
        <input placeholder="Search for web&dev" />
      </div>
      <div className="header_right">
        <HelpOutlineIcon />
      </div>
    </div>
  );
};

export default Header;
