import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainMenu from './MainMenu';
import Game from './Game'
import Tutorial from './Tutorial';
import Options from './Options';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainMenu/>}>
          <Route path="options" element={<Options/>}/>
          <Route path="howtoplay" element={<Tutorial/>}/>
        </Route>
        <Route path="/play" element={<Game/>}/>
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
