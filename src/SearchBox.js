import React, { Fragment } from 'react';

const SearchBox = ({onSearchChange})=> {
  return(
    <Fragment>
    <div className='pa2'>
      <input
        onChange={onSearchChange}
        className='pa3 ba b--gree bg-lightest-blue'
        type="search"
        placeholder="Search Kitties"
      />
    </div>
    </Fragment>
  )
}

export default SearchBox;
