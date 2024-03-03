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
      <Mainpage />
      {/*    {showMainpage ? <Mainpage /> : <Intropage  />}
      <button onClick={toggleComponent}>Go to next page!</button> */}

      {/* {condition ? (
        <button onClick={toggleComponent}>Go to next page!</button>
      ) : (
        <div>My fallback if false</div>
      )} */}

      {/* {condition && <button onClick={toggleComponent}>Go to next page!</button>} */}
    </>
  );
}

export default App;
