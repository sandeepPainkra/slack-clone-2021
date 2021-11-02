import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StateProvider, useStateValue } from "./components/StateProvider";
import Login from "./components/Login";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <div className="app_body">
            <Switch>
              <Route path="/">
                <Sidebar />
                {/* <div className="chat_bodyAlternate">
                <h2>
                  This is Chat Section Please go to any Chat Room to Chattings
                </h2>
              </div> */}
              </Route>
            </Switch>
            <Switch>
              <Route path="/rooms/:id">
                <Chat />
              </Route>
            </Switch>
          </div>
        </div>
      )}
    </Router>
  );
}

export default App;
