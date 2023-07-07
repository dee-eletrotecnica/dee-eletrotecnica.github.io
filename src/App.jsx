import './App.css';
import { DynamicPage } from './pages/DynamicPage';
import { TestePage } from './pages/Teste';
import { CursoEletrotecnica } from './pages/curso-eletroeletronica';
import { Home } from './pages/home';
import { Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import content from "../content.yaml";


function App() {

  const [repoObj, setRepoObj] = useState([]);
  console.log(repoObj);
  
  async function buscarDados(repositories) {
    for (let repo in repositories) {
      // LEMBRAR DE RETORNAR O MARKDOWN CRU
      // const result = await getRawMarkdown(url);
      setRepoObj(prevState => [...Array.from(new Set(prevState)), repositories[repo]]);
    }
  }
  
  useEffect(() => {
    buscarDados(content[0].repositories);
    }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      {Array.from(new Set(repoObj)).map(item => (
        <Route path={item.title} element={<DynamicPage content={item} />}/>
        ))} 
      <Route path="*" element={<>DEADLINE</>}/>
    </Routes>
  )
}

export default App;
