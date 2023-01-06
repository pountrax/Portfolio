import {Routes,Route} from 'react-router-dom'
import Inicio from './Paginas/Inicio/Inicio';
function App() {
  return (
      <Routes>
        <Route path="/PortFolio" element={<Inicio/>}/>
       </Routes>
  )
}

export default App;
