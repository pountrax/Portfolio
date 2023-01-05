import Comida from './components/Comida';
import './components/styles.css';
import {Routes,Route} from 'react-router-dom'
import RecetasInfo from './components/RecetasInfo';
import Perfil from './components/NavBar/NavBar';
import NavBar from './components/NavBar/NavBar';
import Inicio from './Paginas/Inicio/Inicio';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route exact path="/:ComidaId" element={<RecetasInfo/>}/>
       </Routes>
    </>
  )
}

export default App;
