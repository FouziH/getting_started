//This looks like require('') like node
import logo from './logo.svg';
import './App.css';
import CohortGreeting from './Components/CohortGreeting/CohortGreeting';
import ButtonClicker from './Components/ButtonClicker/ButtonClicker';

function App() {

  //We can put HTML in our Javascript 
  //We call this JSX  === Javascript extended
  //This gets 'compiled" into a regular javascript
 
  return (
    // We tend to call this JSX Code
    //Almost the same as HTML, but we sat className instead of class
    <div className="App">
      {/* Render our CohortGreeting  component into the DOM */}
      {17/3} is a rational number
      <CohortGreeting />
      <ButtonClicker />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <label htmlFor ="someInput">Look at me ma, I am a real label!!</label>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* Do another greeting for fun */}
      <CohortGreeting />
    </div>
  );
}

// Looks like module.export in node
export default App;
