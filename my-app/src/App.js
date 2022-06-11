import Greeting from './Greeting'

import Welcome from './Welcome';

import './App.css';


function App() {
  return (
    <div className="App">
      <Welcome user="James Bond" age={50}/>
      <Greeting title="test message" subtitle="subtitle"/>
    </div>
  );
}

export default App;
