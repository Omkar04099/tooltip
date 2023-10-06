import React, { useState } from "react";
import Tooltip from "./Tooltip";
import styles from "../Styles/app.module.css";

function App() {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className={styles.App}>
      <div>
        <label  for="direction" className={styles.directionContainer}>Please choose a direction:&nbsp; </label>
        <select name="direction"  className={styles.dropdown}  onChange={handleChange} id="direction">
        <option value="#" selected hidden> </option>
          <option value="left">left</option>
          <option value="right">right</option>
          <option value="top">top</option>
          <option value="bottom">bottom</option>
        </select>
      </div>

      <div className={styles.tooltip}>
        {value && <Tooltip value={value} />}
        
      </div>
    </div>
  );
}

export default App;
