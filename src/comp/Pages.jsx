import FoodInfo from "./FoodInfo";
import Header from "./Header";
import Search from "./Search";

function Intropage() {
  return (
    <div className="component">
      <h1>
        Hej hej <br />
        Detta är min Sida.
      </h1>
    </div>
  );
}

function Mainpage() {
  return (
    <div className="component">
      <Header />
      <Search />
      <FoodInfo />
    </div>
  );
}

export { Intropage, Mainpage };
