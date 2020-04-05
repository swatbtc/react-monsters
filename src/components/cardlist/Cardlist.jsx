import React from 'react';
import Card from '../card/card.component';
const CardList=({users})=>{

  return (
    <div>
      {users.map(user=>(

        <Card key={user.id} user={user}></Card>
      ))}
  
    </div>

  )
};
export default CardList;