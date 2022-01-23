import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list';
import { Searchbox } from './components/search-box/search-box'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters : [],
      searchField : ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json() )
    .then( users => this.setState({ monsters: users }))
  }

  handelChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render (){
    const { monsters, searchField } = this.state;
    const filterMosters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <Searchbox placeholder=" search for monsters " 
        handelChange ={this.handelChange}/>
        <CardList monsters={filterMosters}/>
      </div>
    );
  }
}
export default App;
