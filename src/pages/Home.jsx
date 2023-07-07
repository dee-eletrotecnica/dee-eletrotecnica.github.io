import { Card } from '../components/card';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { IntroComponent } from '../components/introComponent';
import { useState, useEffect } from 'react';
import content from "../../content.yaml";
import remarkGfm from "remark-gfm"
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';


export const Home = () => {

  const [repoObj, setRepoObj] = useState([]);
  console.log("🚀 ~ file: home.jsx:15 ~ Home ~ repoObj:", repoObj)
  
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
        <>
        <Header />
      <IntroComponent />
      <div className="wrapper">
        {/* Se não tiver conteúdo renderizar botao de ADICIONAR CONTEUDO */}
        <main className="container">
          {/* <Card title={"CEFET-MG"} desc={"Descrição..."} item1={{title: "Item1", external: ""}} item2={{title: "Item2", external: ""}} item3={{title: "Item3", external: ""}} page={"https://www.cefetmg.br/"} /> */}
          {/* <Card title={"DEE"} item1={{title: "Item1", external: ""}} item2={{title: "Item2", external: ""}} item3={{title: "Item3", external: ""}} desc={"Departamento de Engenharia Elétrica"} page={"#"}/> */}
          {/* <Card title={"Curso de Eletrotécnica"} item1={{title: "Item1", external: ""}} item2={{title: "Item2", external: ""}} item3={{title: "Item3", external: ""}} desc={"Descrição..."} page={"curso-eletrotecnica"}/> */}
          {/* <Card title={"Mostra de Cursos 2023"} item1={{title: "Kit IoT", external: "https://github.com/Epaminondaslage/Kit-IoT"}} item2={{title: "Kit SBC Linux", external: "https://github.com/Epaminondaslage/Kit-SBC-Linux"}} item3={{title: "OpenPLC", external: "https://github.com/Epaminondaslage/OpenPLC"}} desc={"Descrição..."} external={"#"}/> */}
          {/* <Card title={"GitHub dos Professores"} item1={{title: "Item1", external: ""}} item2={{title: "Item2", external: ""}} item3={{title: "Item3", external: ""}} desc={"descrição..."} external={"#"}/> */}
          {/* <Card title={"Card Exemplo"} item1={{title: "Item1", external: ""}} item2={{title: "Item2", external: ""}} item3={{title: "Item3", external: ""}} desc={"descrição..."} external={"#"}/> */}
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