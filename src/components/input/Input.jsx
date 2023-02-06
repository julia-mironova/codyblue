import React from "react";
import { Input } from '@mui/material';
import styles from "./Input.module.css";

class InputComponent extends React.Component {
  render() {
    return <label className={styles.label}>{this.props.label}
      <Input type={this.props.type} placeholder={this.props.placeholder} className={styles.input} defaultValue={this.props.value} onChange={ this.props.handleChange} />
    </label>
  }
    
}

export { InputComponent }
