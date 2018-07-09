import React, { Component } from 'react';
import SignOutButton from './SignOut'
import CurrentGames from "./CurrentGames";
import "./Container.css";

class HomePage extends Component {
//    state = {
//      response: []
//    }
// //use axios here//
//     componentDidMount(){
//      fetch("/api/allGames").then( data => data.json() ).then((data) => {
//        this.setState({
//          response: data
//        })
//      })
//     }

//     renderList = () => {
//       console.log(this.state.response)
//       return this.state.response.map(item => <div key={item.username}>{item.username}</div>)
//     }
    
    render() {
      return (
        <div className="col s12" id="home">
         
           
              <h4 id="subhome"></h4>
        <div class="collection">
         <h3 class = "collection-header center" > Your Current Games</h3>
        <a href="#!" class="collection-item active">Pass the Antlers</a>
        <a href="#!" class="collection-item active">Red Nose Wins</a>
        <a href="#!" class="collection-item active">Santa in the Big City</a>
        <a href="#!" class="collection-item active">Up on the Roof</a>
      </div>
            


              <CurrentGames />
              {/* { this.renderList() } */}
              <a href="/create" className="waves-effect waves-light btn" id="newuser">Create New Team</a>
              <a href="/join" className="waves-effect waves-light btn" id="newuser">Join a Team</a>
        
              <SignOutButton />
           
          
         
        </div>
      );
    }
  }
  
  export default HomePage;