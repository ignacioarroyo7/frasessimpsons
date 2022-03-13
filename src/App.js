import './App.css';
import logo from './logo.png'; //importo en la variable logo el logo que esta en src/logo.png
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Frase from './components/Frase';
import {useState, useEffect} from "react";

function App() {

  const [personaje, setPersonaje] = useState({});

  useEffect(()=>{
    consultarAPI();
  },[]);

  const consultarAPI = async ()=>{
    const respuesta = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes') //fetch hace un request o una peticion a la url y se guarda en la variable respuesta
    const dato = await respuesta.json();
    console.log(respuesta);
    console.log(dato[0]);
    //guardar los datos dentro del state
    setPersonaje(dato[0]);
  }

  return (
    <section className='container my-5 d-flex flex-column align-items-center'>
      <img src={logo} alt="Logo de los simpsons" />
      <Button variant='warning' className='w-50 text-light my-5' onClick={()=>consultarAPI()}>Obtener frase</Button>
      <Frase personaje={personaje}></Frase>
    </section>
  );
}

export default App;
