import classes from "./Card_info.module.css";

function Card_info(props) {
  return (
    <div className={classes.food_item}>
      <img src={props.food.image}></img>
      <div>
        <h4>{props.food.foodName}</h4>
        <h4>he</h4>
      </div>
    </div>
  );
}

export default Card_info;
