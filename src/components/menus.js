import classes from "./menus.module.css";
import Card_info from "./Card_info";

function Menus() {
  const foods = [
    {
      foodName: "burger",
      image: "/images/card-image1.png",
    },
    {
      foodName: "ramen",
      image: "/images/card-image2.png",
    },
  ];

  const foodElements = foods.map((food, index) => {
    return <Card_info food={food} />;
  });
  return (
    <main>
      <h2 className={classes.title}>Recommended Menu</h2>
      <section className={classes.cards}>
        {foodElements}
        {/* <div>
          <img src="/images/card-image1.png"></img>
          <h4>FoodName</h4>
        </div>
        <div>
          <img src="/images/card-image2.png"></img>
          <h4>FoodName</h4>
        </div>
        <div>
          <img src="/images/card-image.png"></img>
          <h4>FoodName</h4>
        </div>
        <div>
          <img src="/images/card-image1.png"></img>
          <h4>FoodName</h4>
        </div>
        <div>
          <img src="/images/card-image2.png"></img>
          <h4>FoodName</h4>
        </div> */}
      </section>
    </main>
  );
}

export default Menus;
