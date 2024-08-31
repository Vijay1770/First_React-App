import styles from "./FoodInput.module.css";
const FoodInput = ({ handleKeyDown }) => {
  //Event handling by using OnChange...
  return (
    <input
      type="text"
      placeholder="Enter Food Item..."
      className={styles.foodInput}
      onKeyDown={handleKeyDown}
    />
  );
};
export default FoodInput;
