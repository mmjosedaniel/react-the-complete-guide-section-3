import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some othe value',
    showPerson: false
  });

  const [otherState, setOtherState] = useState('some othe value');

  const [showPersonState, setShowPersonState] = useState({showPerson: false});

  console.log(personsState, otherState);

  const switchNameHandler = (newName) => {
    // console.log("Was clicked!!!")
    // DON'T DO THIS: this.state.persons[0].name = "Maximilian";
    setPersonsState({ 
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
     });
  }

   const nameChangeHandler = (event) => {
    setPersonsState({ 
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
     });
  };

  const togglePersonsHandler = () => {
    const doesShow = showPersonState.showPerson;
    setShowPersonState({showPersons: !doesShow});
  };

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer;'
  }

  return (
    <div className="App">
      <h1>Hi! I'm React</h1>
      <p>This is really working</p>
      <button 
        style={style}
        onClick={togglePersonsHandler}>Switch Name
      </button>
      {
        showPersonState.showPerson === true ?
        <div>
          <Person
            name={personsState.persons[0].name}
            age={personsState.persons[0].age}
          />
          <Person 
          name={personsState.persons[1].name}
          age={personsState.persons[1].age} 
          click={switchNameHandler.bind(this, 'Max!')}
          changed={nameChangeHandler} >My hobbies: Racing</Person>
          <Person
            name={personsState.persons[2].name}
            age={personsState.persons[2].age}
          />
        </div> : null         
      }
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Hi, I'm a React app!!!"));
}

export default app;


