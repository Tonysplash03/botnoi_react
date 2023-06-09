import classes from "./Header.module.css";
import { useState } from "react";
import foods from "./Info/data";

function Header(props) {
  const [searchText, setSearchText] = useState(""); //need to be call in the react function

  const filteredFoods = foods.filter((food) => {
    return food.foodName.includes(searchText); //'title' not sure if check for key value in food data
  });

  return (
    <nav
      className={classes.contain}
      style={{
        // Don't understand why need style to work, but put in CSS and doesn't work
        height: "656px",
        backgroundSize: "cover",
        backgroundImage: 'url("/images/search-hero.png")',
      }}
    >
      <div className={classes.title}>
        <h1 className={classes.heading}>Find a recipe</h1>
        <div className={classes.searchBar}>
          <img src="/images/search.png" className={classes.searchLogo}></img>
          <input
            className={classes.search}
            type="text"
            placeholder="Find the menu that you want..."
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          ></input>
        </div>
      </div>
    </nav>
  );
}
// const filteredFoods = foods.filter((food) => {
//   return food.foodName.includes("");
// });
// export { filteredFoods };
export default Header;
