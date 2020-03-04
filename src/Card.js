import React, { Fragment } from 'react';

const Card = ({id, name, email, username, catID})=> {
  return(
    <Fragment>
    <div className='tc bg-light-green dib br3 pa3 ma2 grow'>
      <img alt='robots'src={`https://robohash.org/${catID}?set=set4&&size=200x200`} />
      <div>
        <h2>{ name }</h2>
        <p>{username}</p>
        <p>{ email }</p>
      </div>
    </div>
    </Fragment>
  )
}

export default Card;
