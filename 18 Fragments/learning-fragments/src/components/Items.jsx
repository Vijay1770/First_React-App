import styles from "./Item.module.css"; //we can use any name like css or anything in place of styles...

//{list_item is a props}
const Item = ({ list_item }) => {
  return (
    <li className={`${styles["my-lists"]} list-group-item`}>
      <span className={`${styles["my-items"]}`}>{list_item}</span>
    </li>
  ); //We can also use "props.list_item" and dont need to declare the let ...
};
export default Item;
