import logo from './logo.svg';
import './App.css';
import FeatureToggle from './components/FeatureToggle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
        <h2>Featuring Toggle Demo</h2>
        <FeatureToggle isEnabled={true} featureName={"Accept Cookies"}/>
        <FeatureToggle isEnabled={false} featureName={"Dark Mode"}/>
        </div>
      </header>
      
    </div>
  );
}

export default App;
