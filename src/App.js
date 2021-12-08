import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MenuPrincipal from './MenuPrincipal';
import Juego from './Juego'
import Opciones from './Opciones';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuPrincipal/>}>
          <Route path="opciones" element={<Opciones/>}/>
        </Route>
        <Route path="/jugar/:dimensionTablero" element={<Juego/>}/>
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
