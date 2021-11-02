import { Help, HelpOutlined, StarBorderOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import db from "./firebase";
import Message from "./Message";
import firebase from "firebase";
import { useStateValue } from "./StateProvider";

const Chat = () => {
  const roomId = useParams();
  const [roomName, setRoomName] = useState();
  const [roomMessages, setRoomMessages] = useState([]);
  const [input, setInput] = useState();
  const [{ user }, dispatch] = useStateValue();

  const SendMessage = (e) => {
    console.log("clicked");
    e.preventDefault();
    if (roomId.id) {
      db.collection("rooms").doc(roomId.id).collection("messages").add({
        message: input,
        img: user?.photoURL,
        user: user?.displayName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
    setInput("");
  };

  useEffect(() => {
    if (roomId.id) {
      db.collection("rooms")
        .doc(roomId.id)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) => {
          setRoomMessages(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, [roomId.id]);
  useEffect(() => {
    if (roomId.id) {
      db.collection("rooms")
        .doc(roomId.id)
        .onSnapshot((snapshot) => {
          setRoomName(snapshot.data().name);
        });
    }
  }, [roomId.id]);

  return (
    <div className="chat">
      <div className="chat_header">
        <div className="Chat_headerInfo">
          <p>
            <span>#</span>
            {roomName}
          </p>
          <StarBorderOutlined />
        </div>
        <div className="chat_headerRight">
          <Help />
          <p>Details</p>
        </div>
      </div>

      {/* Chat body starts here */}

      <div className="roomMessages">
        {roomMessages.map((data) => {
          console.log(data);
          return (
            <Message
              img={data.img}
              message={data.message}
              user={data.user}
              timestamp={data.timestamp}
            />
          );
        })}
      </div>

      <div className="chatInput">
        <form>
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            type="text"
            placeholder={`#Message ${roomName}`}
          />
          <button type="submit" onClick={SendMessage}>
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
