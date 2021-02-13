import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./components/Button";
import { changeButtonState } from "./store/actions";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const isActive = useSelector((store) => store.isActive);

  const buttonHandler = () => {
    dispatch(changeButtonState(!isActive));
  };

  return (
    <div className="App">
      <Button handler={buttonHandler} isButtonActive={isActive} />
    </div>
  );
};

export default App;
