import { Card } from '../components/card';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { IntroComponent } from '../components/introComponent';
import { useState, useEffect } from 'react';
import content from "../../content.yaml";


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
        <IntroComponent />
        <div className="wrapper">
          <main className="container">
            {repoObj.map(item => (
              <div key={item.url}>
                <Card children={item.url} title={item.title} desc={item.desc} items={item.items}/>
              </div>
          ))} 
          </main>
        </div>
        <Footer />
        </>
    )
}