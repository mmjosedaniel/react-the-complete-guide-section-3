import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  });

  const [otherState, setOtherState] = useState('some othe value');

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

  return (
    <div className="App">
      <h1>Hi! I'm React</h1>
      <p>This is really working</p>
      <button onClick={() => switchNameHandler('Maximilin!!')}>Switch Name</button>
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
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Hi, I'm a React app!!!"));
}

export default app;


