import classes from "./Card_info.module.css";

function Card_info(props) {
  return (
    <div className={classes.food_item}>
      <img src={props.food.image}></img>
      <h4>{props.food.foodName}</h4>
    </div>
  );
}

export default Card_info;
