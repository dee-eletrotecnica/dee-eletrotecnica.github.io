// import { Card } from '../card'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { useEffect, useState } from 'react';
import { getRawMarkdown } from '../utils/getRawMarkdown';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from "remark-gfm";
import rehypeRaw from 'rehype-raw'
import content from "../../content.yaml";
import rehypeFilter from 'react-markdown/lib/rehype-filter';


export const TestePage = () => {
  const [markdown, setMarkdown] = useState([]);

async function buscarDados(repositories) {
  for (let repo in repositories) {
    const url = repositories[repo];
    const result = await getRawMarkdown(url);
    setMarkdown([...markdown, result.data]);
  }
}

  useEffect(() => {
    buscarDados(content.repositories)
    }, []);
    
    return (
        <>
        <Header />
      <div className="wrapper">
        {markdown[0]}  
      </div>
      <Footer />
        </>
    )
}