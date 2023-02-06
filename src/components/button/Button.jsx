import React from "react";
import styles from "./Button.module.css";

class ButtonComponent extends React.Component {
  render() {
    return <button type={ this.props.type } onClick={this.props.onClickHandler} className={styles.button}>{ this.props.text }</button>   
  }    
}

export { ButtonComponent }
