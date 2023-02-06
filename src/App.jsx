import React from "react";
import { Search } from "./components/search/Search.jsx";
import { Wrapper } from './components/wrapper/Wrapper.jsx';
import { products } from "./fake_data.js";
import { TableComponent } from "./components/table/Table.jsx";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      id: "",  
      rows: [...products]
    };    
  }  

  searchById = (e) => {
    e.preventDefault();    
    let newRows = this.state.rows.filter(el => el.id === Number(this.state.value))
    this.setState({rows: newRows})
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <p>
          Check the product!
        </p>        
      </header>
      <main className="App-main">
        <Wrapper>
            <Search value={this.state.value} handleChange={this.handleChange} onClickHandler={ this.searchById } /> 
            <TableComponent rows={this.state.rows} />
        </Wrapper>
      </main>
      <footer className="App-header">
        <p>
          Thank you! Don't forget about payment!
        </p>
        <a className="App-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mironava-julia-72a70845/">My linkedIn</a>
      </footer>
      </div>
    )
  } 
}

export default App;
