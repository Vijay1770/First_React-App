import Display from "./components/display";
import styles from "./App.module.css";
import BtnContainer from "./components/btnContainer";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result=eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.calculator}>
        <Display displayValue={calVal}></Display>
        <BtnContainer onButtonClick={onButtonClick}></BtnContainer>
      </div>
    </div>
  );
}

export default App;
