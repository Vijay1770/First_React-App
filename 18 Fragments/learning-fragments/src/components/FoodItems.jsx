import Item from "./Items";

const FoodItems = ({foodItems}) => {
  return (
    <ul className="list-group">
      {foodItems.map((items) => (
        <Item key={items} list_item={items}></Item> //list is the attribute like we use in HTML...
      ))}
    </ul>
  );
};
export default FoodItems;
