import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import EditIcon from "@mui/icons-material/Edit";
import SidebarOptions from "./SidebarOptions";
import {
  Bookmark,
  Drafts,
  Inbox,
  MessageRounded,
  People,
  Add,
  App,
  Apps,
} from "@mui/icons-material";
import db from "./firebase.js";
import { useStateValue } from "./StateProvider";

const Sidebar = () => {
  const [{ user }, dispatch] = useStateValue();
  const [room, setRoom] = useState([]);
  console.log(user);

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) => {
      setRoom(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="sidebarHeader_Info">
          <h2>{user.displayName}</h2>
          <h3>
            <FiberManualRecordIcon />
            <span>active</span>
          </h3>
        </div>
        <EditIcon className="editIcon" />
      </div>

      {/* sidebar options starts here */}

      <SidebarOptions Icon={MessageRounded} title="Threads" />
      <SidebarOptions Icon={Inbox} title="Mentions & Reactions" />
      <SidebarOptions Icon={Drafts} title="Saved Rooms" />
      <SidebarOptions Icon={Bookmark} title="Channel Browser" />
      <SidebarOptions Icon={People} title="People & users Group" />
      <SidebarOptions Icon={Apps} title="Apps" />
      <hr />
      <SidebarOptions Icon={Add} addClasses title="Add Classes" />
      <hr />
      <div className="sidebar_classes">
        {room.map((data) => {
          return <SidebarOptions title={data.data.name} id={data.id} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
