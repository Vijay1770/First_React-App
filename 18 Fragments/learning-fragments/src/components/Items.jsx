//{list_item is a props}
const Item = ({list_item}) => {
  return <li className="list-group-item">{list_item} </li>; //We can also use "props.list_item" and dont need to declare the let ...
};
export default Item;
