import './App.css';
import { CardPage } from './pages/cardPage/CardPage';
import { Home } from './pages/home/Home';
import { Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import content from "../conteudo.yaml";


function App() {

  const [repoObj, setRepoObj] = useState([]);
  
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
        <Route key={`${item.url}`} path={`/${item.title}`} element={<CardPage content={item} />}/>
        ))} 
      <Route path="*" element={<>DEADLINE</>}/>
    </Routes>
  )
}

export default App;