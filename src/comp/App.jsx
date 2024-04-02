import { useState } from "react";
import { Intropage, Mainpage } from "./Pages";
import "../styles/App.css";

function App() {
  const [showMainpage, setShowMainpage] = useState(false);
  const toggleComponent = () => {
    setShowMainpage(!showMainpage);
  };

/* Använder state här för att kunna render en komponent först och genom att man klickar på komponenten renderas the till Mainpage */
/* Aktivt valt att inte ha mycket färg då jag gillade att det var "cleant" */

  return (
    <div className="Body">
      {showMainpage? <Mainpage /> : <Intropage onClick={toggleComponent} />} 
    </div>
  );
}

export default App;
