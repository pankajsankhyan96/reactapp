import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload to check changes.
        </p>
        <p>
          Changes to create first pull request.
        </p>

        <p>
          Changes to create second pull request fdg.
        </p>
        <p>
          {`${process.env.NODE_ENV}`}
          <span>    App mode : {`${process.env.APP_MODE}`} </span>
        </p>
        <p>
          {`${JSON.stringify(process.env)}`}
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
