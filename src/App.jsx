import './App.css';
import { CardPage } from './pages/cardPage/CardPage';
import { Home } from './pages/home/Home';
import { Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import content from "../conteudo.yaml";
import { getRawMarkdown } from './utils/getRawMarkdown';
import TurndownService from 'turndown';

const turndownService = new TurndownService({
  headingStyle: 'setext',
  hr: '* * *',
  bulletListMarker: '*',
  codeBlockStyle: 'indented',
  fence: '```',
  emDelimiter: '_',
  strongDelimiter: '**',
  linkStyle: 'inlined',
  linkReferenceStyle: 'full',
  br: '  ',
  blankReplacement: function (content, node) {
    return node.isBlock ? '\n\n' : ''
  },
  keepReplacement: function (content, node) {
    return node.isBlock ? '\n\n' + node.outerHTML + '\n\n' : node.outerHTML
  },
  defaultReplacement: function (content, node) {
    return node.isBlock ? '\n\n' + content + '\n\n' : content
  }
})

function App() {

  const [repoObj, setRepoObj] = useState([]);
  const [page, setPage] = useState([]);
  
  async function buscarDados(repositories) {
    for (let repo in repositories) {
      const rawMarkdown = await getRawMarkdown(repositories[repo]);
      const html = turndownService.turndown(rawMarkdown.data);
      setPage(prevState => [...Array.from(new Set(prevState)), html]);
      setRepoObj(prevState => [...Array.from(new Set(prevState)), repositories[repo]]);
    }
  }
  
  useEffect(() => {
    buscarDados(content[0].repositories);
    }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      {Array.from(new Set(repoObj)).map((item, i) => (
        <Route key={`${item.url}`} path={`/${item.title}`} element={<CardPage content={item} page={page[i]} />}/>
        ))} 
      <Route path="*" element={<Home />}/>
    </Routes>
  )
}

export default App;
