// import { Card } from '../card'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { useEffect, useState } from 'react';
import { getRawMarkdown } from '../utils/getRawMarkdown';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { remark } from "remark-gfm"
import content from "../../content.yaml";


export const Teste2 = () => {
  const [markdown, setMarkdown] = useState([]);

async function buscarDados(params) {
  for (let repo in params) {
    const url = params[repo];
    const result = await getRawMarkdown(url);
    setMarkdown([...markdown, result.data]);
  }
}

  useEffect(() => {
    buscarDados(content.repositories)
    }, []);
  
  
  /* 
  useEffect(() => {

    setMarkdown([...markdown, data]);
    }, [data]);

   for (let repo in content.repositories) {
    const url = content.repositories[repo];
    const rawMarkdown = await getRawMarkdown(url);
    console.log("🚀 ~ file: Teste.jsx:12 ~ TestePage ~ rawMarkdown:", rawMarkdown.data)
    setMarkdown([...markdown, rawMarkdown.data]);
    console.log("🚀 ~ file: Teste.jsx:14 ~ TestePage ~ markdown:", markdown)

}  */
    
    return (
        <>
        <Header />
      <div className="wrapper">
      {markdown.map(item => (
            <div key={Math.random()}>
              <ReactMarkdown children={item} remarkPlugins={[remark]}/>
            </div>
        ))} 
        
      </div>
      <Footer />
        </>
    )
}