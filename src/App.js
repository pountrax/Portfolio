
import './components/styles.css';
import {Routes,Route} from 'react-router-dom'
// import Perfil from './components/NavBar/NavBar';
// import NavBar from './components/NavBar/NavBar';
import Inicio from './Paginas/Inicio/Inicio';
function App() {
  return (
    <>
      <Routes>
        <Route path="/PortFolio" element={<Inicio/>}/>
       </Routes>
    </>
  )
}

export default App;
