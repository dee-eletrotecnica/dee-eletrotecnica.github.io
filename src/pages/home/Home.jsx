import { Card } from '../../components/card';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { CarouselComponent } from '../../components/carousel';
import { useState, useEffect } from 'react';
import content from "../../../conteudo.yaml";
import paginas from "../../../paginas.yaml";


export const Home = () => {

  const [repoObj, setRepoObj] = useState([]);
  

  async function buscarDados(repositories) {
    for (let repo in repositories) {
      setRepoObj(prevState => [...Array.from(new Set(prevState)), repositories[repo]]);
    }
  }

  
  useEffect(() => {
    buscarDados(content[0].repositories);
    }, []);
  
    return (
        <>
        <Header />
        {/* <CarouselComponent /> */}
        <div className="wrapper">
        <div className="title">
            </div>
          <main className="container">
            {repoObj.map((item, i) => (
              <div key={item.url}>
                <Card key={item.url+i} page={`page${i+1}`} url={item.url} title={item.title} desc={item.description} items={item.items} color={item.color} imageUrl={item.imageUrl}/>
              </div>
            ))} 
          </main>
        </div>
        <Footer />
        </>
    )
}