import './App.css'
import { CursoEletrotecnica } from './components/pages/curso-eletroeletronica'
import { Home } from './components/pages/home'
import { Routes, Route} from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/curso-eletrotecnica" element={<CursoEletrotecnica />}/>
    </Routes>
  )
}

export default App
