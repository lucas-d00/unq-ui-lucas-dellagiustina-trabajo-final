import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MenuPrincipal from './paginas/MenuPrincipal';
import Juego from './paginas/Juego'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuPrincipal/>}/>
        <Route path="/jugar/:modoDeJuego/:dimensionTablero" element={<Juego/>}/>
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
