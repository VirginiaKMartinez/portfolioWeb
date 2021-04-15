import logo from './logo.svg';
import './App.css';
import './styles/wireframe.css'
// import {underConstruction} from '../src/js/views/underConstruction';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
        
      </header> */}
      <div className="portada"><span>Esta es mi portada</span></div>
      <div className="aboutMe"><span>About me</span></div>
      <div className="experiencia"><span>sta es mi experiencia</span>E</div>
      <div className="estudios"><span>Mis estudios</span></div>
      <div className="idiomas"><span>Idiomas</span></div>
      <div className="techDesign"><span>Apartado Tech in love con Design</span></div>
      <div className="contact"><span>Links a "GitHub","Linkedin",...</span></div>


      

    </div>
  );
}

export default App;
