import styles from "./btnContainer.module.css";

const BtnContainer = ({ onButtonClick }) => {
  const btnNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "9",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.btnContainer}>
      {btnNames.map((btnName) => (
        <button className={styles.btn} onClick={() => onButtonClick(btnName)}>
          {btnName}
        </button>
      ))}
    </div>
  );
};

export default BtnContainer;
