import styles from "./Item.module.css"; //we can use any name like css or anything in place of styles...

//{list_item is a props}
const Item = ({ list_item , buyBtnHandle}) => {
  

  return (
    <li className={`${styles["my-lists"]} list-group-item`}>
      <span className={`${styles["my-items"]}`}>{list_item}</span>
      <button
        className={`${styles.btn} btn btn-info`}
        onClick={buyBtnHandle}
      >  
      BUY
      </button>
    </li>
  );
};
export default Item;
