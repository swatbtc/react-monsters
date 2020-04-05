import React,{Component} from 'react';
import logo from './logo.svg';
import CardList from './components/cardlist/Cardlist';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      users:[],
      searchField:'',
    }
  }
  render () {
    const { users,searchField } = this.state; 
    const filteredUsers = users.filter(
      user=> user.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
       <div className="App"> 
       <h1>Monsters</h1>
         
         

          <SearchBox placeholder="Search Monsters" handleChange={ e=> {
          this.setState({searchField:e.target.value},()=>console.log(this.state))}}></SearchBox>
      <CardList users={filteredUsers} />
       </div>
    )
  };
    handleChange=(e)=>{
      this.setState({searchField:e.target.value},()=>console.log(this.state))
     
    }
  componentDidMount(){
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response=>response.json())
  .then(users=>this.setState({users}))

}
}

export default App;
