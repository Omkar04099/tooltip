import React from "react";
import styles from '../Styles/tooltip.module.css';
import {Tooltip as Tool} from 'react-tooltip'


function Tooltip(props) {
    const direction = props.value
    return (
      <div className="container">
        
        <Tool anchorSelect="#my-anchor-element" place={direction}>
            Hey there, Welcome to my app!
        </Tool>
        <button className={styles.btn} id='my-anchor-element'>Sample Button</button>
      </div>
    );
  }
  
  export default Tooltip;