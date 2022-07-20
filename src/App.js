import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Logout from './components/LogOut';

function App() {
  return (
    <div className="App">
      <Login/>
      <Logout/>
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
      </header>
    </div>
  );
}

export default App;
