import React from "react";
import "./Message.css";
const Message = ({ message, img, user, timestamp }) => {
  return (
    <div className="messages">
      <img src={img} alt="user image" />
      <div className="message_info">
        <h4>
          {user}
          <span className="timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Message;
