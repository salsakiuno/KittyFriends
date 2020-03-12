import React from 'react';
import Card from './Card';

const CardList = ({kitties})=> {
    const cats = kitties.map(value => {
      return <Card key={ value.id } id={ value.id } name={ value.name } email={ value.email } username={ value.username } catID={ value.catID }/>
    });

    return (
      <div>
        { cats }
      </div>
    );
}

export default CardList;
