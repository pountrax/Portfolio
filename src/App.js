import {Routes,Route} from 'react-router-dom'
import Arte from './Paginas/Arte/Arte';
import Inicio from './Paginas/Inicio/Inicio';
import Proyectos from './Paginas/proyectos/Proyectos';
function App() {
  return (
      <Routes>
        <Route path="/PortFolio" element={<Inicio/>}/>
        <Route path="/Arte" element={<Arte/>}/>
        <Route path="/Proyectos" element={<Proyectos/>}/>
       </Routes>
  )
}

export default App;
