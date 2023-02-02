import React from "react";
import { Search } from "./components/search/Search.jsx";
import { Wrapper } from './components/wrapper/Wrapper.jsx';
import './App.css';
import { TableComponent } from "./components/table/Table.jsx";

class App extends React.Component {
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
            <Search /> 
            <TableComponent />
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
