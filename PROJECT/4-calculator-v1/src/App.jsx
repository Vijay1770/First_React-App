import Display from "./components/display";
import styles from "./App.module.css";
import BtnContainer from "./components/btnContainer";

function App() {
  return (
    <div className={styles.body}>
    <div className={styles.calculator} >
      <Display></Display>
     <BtnContainer></BtnContainer>
    </div>
    </div>
  )
}

export default App;
