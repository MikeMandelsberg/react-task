import React, { Component } from 'react'
import './App.css';
import Table from './components/table';
class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoaded: false,
      items: []
    }
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(
        (result) => {
          //console.log(result)
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
      setInterval(() => {
        //console.log(this.state.items)
      }, 2000);
  }
  render() {
    return (
      <div className="App">
        <Table  items={this.state.items}/>
      </div>
    )
  }
}


export default App;
