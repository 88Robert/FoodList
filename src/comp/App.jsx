import { useState } from "react";
import { Intropage, Mainpage } from "./Pages";
import "../styles/App.css";

function App() {
  const [showMainpage, setShowMainpage] = useState(false);
  const toggleComponent = () => {
    setShowMainpage(!showMainpage);
  };

  return (
    <>
      {showMainpage? <Mainpage /> : <Intropage onClick={toggleComponent} />} 
    </>
  );
}

export default App;
