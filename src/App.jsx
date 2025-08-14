import {Route, Routes} from 'react-router-dom';
import './App.css'
import ListaDeInstrumentosEmCards from './Pages/InstrumentosEmCards/ListaDeInstrumentosEmCards';
import ListaDeInstrumentosEmTabela from './Pages/InstrumentosEmTabela/ListaDeInstrumentosEmTabela';
import { ToastContainer } from "react-toastify";
import BotaoNavegacao from './Components/BotaoNavegacao/BotaoNavegacao.jsx';

function App() {
 
  return (
    <>
    <BotaoNavegacao/>
    <Routes>
      <Route path= "/" Component={ListaDeInstrumentosEmCards}/>
      <Route path= "/listaemtabela" Component={ListaDeInstrumentosEmTabela}/>
    </Routes>  
    <ToastContainer/>
    </>
  );
}

export default App
