import logo from './logo.svg';
import GoPharma from './img/gopharma.png';
import GrupoVal from './img/grupoval.png';
import Sparks from './img/sparks.png';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='contenedor'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1>
            We are <span>creative</span>, we are <span>specialized</span>,
            <br /> we are <span>professionals</span>.
            <br /> We are <span>marketing</span> and <span>media</span>
          </h1>
        </div>
        <div className='contenedor-img'>
          <img src={GrupoVal} alt='Grupo Val' />
          <a href='https://go-pharma.mx'>
            <img src={GoPharma} alt='Go Pharma' />
          </a>
          <img src={Sparks} alt='Sparks' />
        </div>
      </header>
    </div>
  );
}

export default App;
