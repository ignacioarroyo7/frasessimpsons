import './App.css';
import logo from './logo.png'; //importo en la variable logo el logo que esta en src/logo.png
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Frase from './components/Frase';
import {useState, useEffect} from "react";
import Loading from './components/Loading';

function App() {

  const [personaje, setPersonaje] = useState({});
  const [carga, setCarga] = useState(true);

  useEffect(()=>{
    consultarAPI();
  },[]);

  const consultarAPI = async ()=>{
    setCarga(true)
    const respuesta = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes') //fetch hace un request o una peticion a la url y el objeto se guarda en la variable respuesta
    const dato = await respuesta.json();
    console.log(respuesta);
    console.log(dato[0]);
    //guardar los datos dentro del state
    setTimeout(() => { //agrego un timeout para ver un rato mas el spinner
      setPersonaje(dato[0]);
      setCarga(false); //cuando la api ya me respondio y los datos se guardaron en personaje, recien cambio carga a false
    }, 500);
  }
//operador ternario
// (condicion logica)?(codigo a ejecutar si la condicion logica es verdadera):(codigo a ejecutar cuando la condicion no se cumple)

const mostarComponente = (carga===true)?(<Loading></Loading>):(<Frase personaje={personaje}></Frase>);


  return (
    <section className='container my-5 d-flex flex-column align-items-center'>
      <img src={logo} alt="Logo de los simpsons" />
      <Button variant='warning' className='w-50 text-light my-5' onClick={()=>consultarAPI()}>Obtener frase</Button>
      {mostarComponente}
    </section>
  );
}

export default App;
