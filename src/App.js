import logo from './logo.svg';
import GoPharma from './img/gopharma.png';
import GrupoVal from './img/grupoval.png';
import Sparks from './img/sparks.png';
import './App.scss';
import { useState } from 'react';
import Axios from 'axios';
function App() {
  const url = '';
  const [data, dataSet] = useState({
    name: '',
    email: '',
    tel: '',
    message: '',
  });
  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      name: data.name,
      email: data.email,
      tel: data.tel,
      mesaje: data.mesaje,
    }).then((res) => {
      console.log(res.data);
    });
  }
  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    dataSet(newdata);
    console.log(newdata);
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='contenedor'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1>
            We are <span>creative</span>, we are <span>specialized</span>,
            <br /> We are <span>professionals</span>.
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
      <section className='form-section'>
        <div className='contenedor'>
          <h2>Let´s work together.</h2>
          <form onSubmit={(e) => submit(e)}>
            <div className='group-form'>
              <input
                onChange={(e) => handle(e)}
                type='text'
                value={data.name}
                name='name'
                id='name'
                placeholder='Name'
              />
            </div>
            <div className='group-form'>
              <input
                onChange={(e) => handle(e)}
                value={data.email}
                type='email'
                name='email'
                id='email'
                placeholder='Email'
              />
            </div>
            <div className='group-form'>
              <input
                onChange={(e) => handle(e)}
                value={data.tel}
                type='tel'
                name='tel'
                id='tel'
                placeholder='Phone'
              />
            </div>
            <div className='group-form'>
              <textarea
                onChange={(e) => handle(e)}
                value={data.mesaje}
                name='mensaje'
                id='mensaje'
                cols='20'
                rows='7'
                placeholder='Please leave a message'
              />
            </div>
            <button className='btn-submit' type='submit'>
              Send
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
