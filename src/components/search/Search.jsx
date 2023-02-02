import React from "react";
import { ButtonComponent } from "../button/Button.jsx";
import { InputComponent } from "../input/Input.jsx";
import styles from "./Search.module.css";

class Search extends React.Component {
  render() {
    return <section className={styles.search}>
      <InputComponent label="Try to find product:" type="number" placeholder="id: number" />
      <ButtonComponent text="Search" />
    </section>
  }
    
}

export { Search }