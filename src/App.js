import React, { Fragment, Component } from 'react';
import CardList from './CardList';
import { kitties } from './kitties';
import SearchBox from './SearchBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      kitties: kitties,
      searchfield: ''
    }
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
        <h1>Cat Friends!</h1>
        <SearchBox onSearchChange={this.onSearchChange}/>
        <CardList kitties={ filteredKitties }/>
      </div>
      </Fragment>
    );
  }
}

export default App;
