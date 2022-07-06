import logo from './logo.svg';
import GoPharma from './img/gopharma.png';
import GrupoVal from './img/grupoval.png';
import Sparks from './img/sparks.png';
import './App.scss';
import { useState } from 'react';
import Axios from 'axios';
function App() {
  // Return today's date and time
  var currentTime = new Date();

  var year = currentTime.getFullYear();
  const url = 'https://mern-api-mmgroup-production.up.railway.app/api/submit';
  const [data, dataSet] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [message, setMessage] = useState('');
  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
    }).then((res) => {
      setMessage(res.data.message);
      console.log(res.data);
    });
  }
  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    dataSet(newdata);
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='contenedor'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1>
            We are <span>creative</span>,<br className='responsive' /> we are{' '}
            <span>specialized</span>,
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
          {!message ? (
            <form onSubmit={(e) => submit(e)}>
              <div className='group-form'>
                <input
                  onChange={(e) => handle(e)}
                  type='text'
                  value={data.name}
                  name='name'
                  id='name'
                  placeholder='Name'
                  required
                />
              </div>
              <div className='group-form'>
                <input
                  onChange={(e) => handle(e)}
                  value={data.email}
                  type='email'
                  name='email'
                  id='email'
                  required
                  placeholder='Email'
                />
              </div>
              <div className='group-form'>
                <input
                  required
                  onChange={(e) => handle(e)}
                  value={data.phone}
                  type='phone'
                  name='phone'
                  id='phone'
                  placeholder='Phone'
                />
              </div>
              <div className='group-form'>
                <textarea
                  required
                  onChange={(e) => handle(e)}
                  value={data.message}
                  name='message'
                  id='message'
                  cols='20'
                  rows='7'
                  placeholder='Please leave a message'
                />
              </div>
              <button className='btn-submit' type='submit'>
                Send
              </button>
            </form>
          ) : (
            <div className='mensaje'>
              <h2>
                Your message has been sent successfully. We will communicate
                soon
              </h2>
              <h2>
                Tu mensaje ha sido enviado correctamente. Nos comunicaremos
                pronto
              </h2>
            </div>
          )}
        </div>
        <small>
          Copyright<sup>©</sup> Marketing and Media<sup>®</sup>
          <br /> All rights reserved {year}.
        </small>
      </section>
    </div>
  );
}

export default App;
