import Header from "./Header";
import Search from "./Search";
import "../styles/Pages.css";

/* detta är min så kallade "App.jsx", 
då jag använder denna för att rendera ut alla komponenter. 
Har aktivt valt detta då jag ville prova hur jag kunde först 
rendera ut en komponent för att sedan rendera ut en annan. */

function Intropage({ onClick }) {
  return (
    <section className="component componentA" onClick={onClick}>
      <video src="src/assets/smoke.mp4" autoPlay muted></video>
      <h1 className="Introheader">
        <span>D</span>
        <span>e</span>
        <span>l</span>
        <span>i</span>
        <span>k</span>
        <span>a</span>
        <span>t</span>
        <span>a</span>
        <span>M</span>
        <span>a</span>
        <span>t</span>
        <span>r</span>
        <span>ä</span>
        <span>t</span>
        <span>t</span>
        <span>e</span>
        <span>r </span>
        <span>!</span>
      </h1>
    </section>
  );
}

function Mainpage() {
  return (
    <div className="component">
      <Header />
      <Search />
    </div>
  );
}

export { Intropage, Mainpage };
