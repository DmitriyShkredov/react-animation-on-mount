import React, { useState } from "react";
import { ReactComponent as MenuIcon } from "./menuIcon.svg";
import { Transition } from "react-transition-group";
import "./App.css";

function App() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="header">
      <Transition in={isOpen} timeout={300} unmountOnExit={true}>
        {(state) => <nav className={`mobile-menu ${state}`}></nav>}
      </Transition>

      <button className="menu-button" onClick={() => setOpen(!isOpen)}>
        <MenuIcon />
      </button>
    </header>
  );
}

export default App;
