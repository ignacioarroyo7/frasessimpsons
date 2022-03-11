import './App.css';
import logo from './logo.png'; //importo en la variable logo el logo que esta en src/logo.png
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Frase from './components/Frase';

function App() {
  return (
    <section className='container my-5 d-flex flex-column align-items-center'>
      <img src={logo} alt="Logo de los simpsons" />
      <Button variant='warning' className='w-50 text-light my-5'>Obtener frase</Button>
      <Frase></Frase>
    </section>
  );
}

export default App;
