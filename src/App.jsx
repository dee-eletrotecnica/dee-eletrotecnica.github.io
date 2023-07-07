import './App.css';
import { TestePage } from './pages/Teste';
import { CursoEletrotecnica } from './pages/curso-eletroeletronica';
import { Home } from './pages/home';
import { Routes, Route} from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/curso-eletrotecnica" element={<CursoEletrotecnica />}/>
    </Routes>
  )
}

export default App;
