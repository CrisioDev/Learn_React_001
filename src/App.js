import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state  = {
    persons: [
      {name: 'Christopher',age:'28'},
      {name: 'Gina',age:'25'},
      {name: 'Calvin',age:'20'}
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('was clicked');
    this.setState({
      persons: [
        {name: newName,age:'23'},
        {name: 'GinaMie',age:'25'},
        {name: 'Calvin',age:'20'}
      ]
    });
  }

  nameChangedHandler = (event) =>{
    this.setState({
      persons: [
        {name: event.target.value, age:'23'},
        {name: 'GinaMie',age:'25'},
        {name: 'Calvin',age:'20'}
      ]
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid #eee',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>Crazy JSX Stuff is goin' on!</p>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Crisio')} >Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Christopher')}
          changed={this.nameChangedHandler}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          >Loves Animes</Person>
      </div>
    );
  }
}

export default App;
