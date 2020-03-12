import React, { Fragment, Component } from 'react';
import CardList from './CardList';
import { kitties } from './kitties';
import SearchBox from './SearchBox';
import Scroll from './Scroll'
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      kitties: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
      users.map(user => user.catID = Math.floor(Math.random() * 10));
      return users;
    })
    .then(users => this.setState({kitties: kitties.concat(users)}))
  }

  onSearchChange = (event)=> {
    this.setState({ searchfield: event.target.value });
  }

  filterKitties = () => {
    return this.state.kitties.filter(kitty => {
      return kitty.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
  }

  render() {
    const filteredKitties = this.filterKitties();
    return (
      <Fragment>
      <div className='tc'>
        <h1 className='f2'>Kitten Friends</h1>
        <SearchBox onSearchChange={this.onSearchChange}/>
        <Scroll>
          <CardList kitties={ filteredKitties }/>
        </Scroll>
      </div>
      </Fragment>
    );
  }
}

export default App;
