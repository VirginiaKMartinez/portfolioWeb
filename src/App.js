import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Virginia Martínez Portfolio Web</h1>
        <h2>Under Construction</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       <span>Meanwile you can go to my Linkedin or download mi CV</span>
       <button>Download</button>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/virginiakmartinez/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
        
      </header>
    </div>
  );
}

export default App;
