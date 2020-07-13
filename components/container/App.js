import React, { Component } from 'react'
import './App.css'

import List from '../List'
import SearchBox from '../searchBox'
import Scroll from '../Scroll'



class App extends Component{
    constructor(){
        super()
        this.state={
            robots:[],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response=> response.json())
          .then(users => {this.setState({ robots: users})});
      }

   onsearchChange=(event)=>{

this.setState({searchfield: event.target.value})


   }
   render(){

    const filterRobots=this.state.robots.filter(robots=>{
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })

     return( <div>
        <h1>robots</h1>
        <SearchBox searchChange={this.onsearchChange}/>
      <Scroll><List robots={filterRobots} /> </Scroll>
     
     </div>
     
     );
     
      }
    }    
   

export default App;