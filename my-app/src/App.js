
import {Greeting} from './Greeting';
import './App.css';
import { PeopleList } from './PeopleList';
import {ClickMe} from './ClickMe';
import { StateUse } from './State_Use';

function App() {
  const people = [{
    name : 'Mohit',
    age : 25,
  },
  {
    name : 'Mayank',
    age : 24,
  }
];

  return (
    <div className="App">
      <header className="App-header">
        <Greeting name="Mohit" message={25}/>
        <PeopleList people = {people}/>
        <ClickMe />
        <StateUse />
        
      </header>
    </div>
  );
}

export default App;
