import React from 'react';
import './card.styles.scss';
const Card=({user})=>{
  const {id,name,email} = user;
  return(
          <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?200x200`} alt="photo"/>
          <div>
  <h2>{name}</h2>
            <p>{email}</p>
          </div>
          </div>
        );

       
};
// componentDidMount(){
//   fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response=>response.json())
//   .then(users=>this.setState({monsters:users}))

// }
export default Card;