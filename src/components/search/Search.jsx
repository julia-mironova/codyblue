import React from "react";
import { ButtonComponent } from "../button/Button.jsx";
import { InputComponent } from "../input/Input.jsx";
import styles from "./Search.module.css";

class Search extends React.Component {
  

  render() {
    return <form className={styles.search}>
      <InputComponent label="Try to find product:" type="number" placeholder="id: number" value={this.props.value} handleChange={ this.props.handleChange } />
      <ButtonComponent type="submit" text="Search" onClickHandler={ this.props.onClickHandler } />
    </form>
  }
    
}

export { Search }