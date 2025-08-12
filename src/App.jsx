import {Route, Routes} from 'react-router-dom';
import './App.css'
import ListaDeInstrumentosEmCards from './Pages/ListaDeInstrumentosEmCards';
import ListaDeInstrumentosEmTabela from './Pages/ListaDeInstrumentosEmTabela';
import { ToastContainer } from "react-toastify";

function App() {
 
  return (
    <>
    <Routes>
      <Route path= "/listaemcards" Component={ListaDeInstrumentosEmCards}/>
      <Route path= "/listaemtabela" Component={ListaDeInstrumentosEmTabela}/>
    </Routes>  
    <ToastContainer/>
    </>
  );
}

export default App
