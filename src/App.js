import { useState } from "react";
import AddUserForm from './forms/AddUserForm' ;
import Usertable from "./tables/Usertable";
function App() {

  const UserData=[
    {id:1,name:'lingesh',username:"D.lingeshBabu"},
    {id:2,name:'jothykrishnan',username:"jothykrishnanMc"},
    {id:3,name:'prakesh',username:"prakesh"},
  ];
  const addUser =(user)=>{
    user.id = Users.length+1;
    setUser([...Users,user])

  }

   const[Users,setUser]= useState(UserData);
  return (
    <div className="container-fluid bg-secondary">
      <div className="bg-secondary">
        <h6>hello lingesh</h6>
        <div className="flex-large ">
          <h6>UserName</h6>
          <input type="text" placeholder="UserName"></input>
        </div>
        <div className="Flex-large">
          <h6>location</h6>
          <input type="text" placeholder="location"></input>
          
        </div>
        <div className="flex-large">
          <h6>E-mail</h6>
          <input type="text" placeholder="E-mail"></input>
          </div>
          <h6>phone number</h6>
          <input type="text" placeholder="phone number "></input>
      </div>
      <div>
      <form action="/action_page.php">
  <label for="location">Choose a location:</label>
  <input type="text" placeholder="LocationName"></input>
  <select name="loaction" id="location">
    <option value="chennai">chennai</option>
    <option value="kolkata">kolkata</option>
    <option value="rajasthan">rajasthan</option>
    <option value="Delhi">Delhi</option>
  </select>
  <br/>
  <input type="submit" value="Submit"/>
</form>
      </div>
      <Usertable users={Users}/>
      <AddUserForm addUser={addUser}/> 
    </div>)}
export default App;