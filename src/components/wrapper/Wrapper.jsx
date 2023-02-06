import React from "react";
import styles from "./Wrapper.module.css";

class Wrapper extends React.Component {
  render() {
    return <section className={styles.section}>{this.props.children}</section>
  }
}

export {Wrapper}