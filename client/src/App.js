import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import socket from "./socket";
import Button from "./components/Button";
import { changeButtonState } from "./store/actions";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const isActive = useSelector((store) => store.isActive);

  useEffect(() => {
    socket.on("change-button-state", (data) => {
      dispatch(changeButtonState(data));
    });
  }, [isActive, dispatch]);

  const buttonHandler = () => socket.emit("button-click", !isActive);

  return (
    <div className="App">
      <Button handler={buttonHandler} isButtonActive={isActive} />
    </div>
  );
};

export default App;
