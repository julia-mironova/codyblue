import React from "react";
import styles from "./Button.module.css";

class ButtonComponent extends React.Component {
  render() {
    return <button onClick={() => {
    console.log('clicked');
  }} className={styles.button}>{ this.props.text }</button>   
  }    
}

export { ButtonComponent }
