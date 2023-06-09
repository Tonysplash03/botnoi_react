import classes from "./menus.module.css";
import Card_info from "./Card_info";
import foods from "./Info/data";
import { useState } from "react";
import Header, { filteredFoods } from "./Header";

function Menus() {
  const [selectedFood, setSelectedFood] = useState(null); //Should I use onClick to show the ingredient page or route to show the page
  //not sure how to go back after enter the ingredient page
  const [searchText, setSearchText] = useState(""); //need to be call in the react function

  const foodElements = foods
    .filter((food) => {
      return food.foodName.includes(searchText); //'title' not sure if check for key value in food data
    })
    .map((food, index) => {
      return <Card_info key={index} food={food} />;
    });
  return (
    <main>
      <Header value={searchText} onValueChange={setSearchText} />
      <h2 className={classes.title}>Recommended Menu</h2>
      <section className={classes.cards}>{foodElements}</section>
    </main>
  );
}

export default Menus;
