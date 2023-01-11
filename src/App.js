import {Routes,Route} from 'react-router-dom'
import Arte from './Paginas/Arte/Arte';
import Inicio from './Paginas/Inicio/Inicio';
function App() {
  return (
      <Routes>
        <Route path="/PortFolio" element={<Inicio/>}/>
        <Route path="/Arte" element={<Arte/>}/>

       </Routes>
  )
}

export default App;
