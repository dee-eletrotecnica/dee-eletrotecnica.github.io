import { Card } from '../card'
import { Header } from '../header'
import { Footer } from '../footer'
import { IntroComponent } from '../introComponent'



export const Home = () => {
    
    return (
        <>
        <Header />
      <IntroComponent />
      <div className="wrapper">
        <main className="container">
          <Card title={"CEFET-MG"} desc={"Descrição..."} item1={{title: "Item1", external: ""}} item2={{title: "Item2", external: ""}} item3={{title: "Item3", external: ""}} page={"https://www.cefetmg.br/"} />
          <Card title={"DEE"} item1={{title: "Item1", external: ""}} item2={{title: "Item2", external: ""}} item3={{title: "Item3", external: ""}} desc={"Departamento de Engenharia Elétrica"} page={"#"}/>
          <Card title={"Curso de Eletrotécnica"} item1={{title: "Item1", external: ""}} item2={{title: "Item2", external: ""}} item3={{title: "Item3", external: ""}} desc={"Descrição..."} page={"curso-eletrotecnica"}/>
          <Card title={"Mostra de Cursos 2023"} item1={{title: "Kit IoT", external: "https://github.com/Epaminondaslage/Kit-IoT"}} item2={{title: "Kit SBC Linux", external: "https://github.com/Epaminondaslage/Kit-SBC-Linux"}} item3={{title: "OpenPLC", external: "https://github.com/Epaminondaslage/OpenPLC"}} desc={"Descrição..."} external={"#"}/>
          <Card title={"GitHub dos Professores"} item1={{title: "Item1", external: ""}} item2={{title: "Item2", external: ""}} item3={{title: "Item3", external: ""}} desc={"descrição..."} external={"#"}/>
          <Card title={"Card Exemplo"} item1={{title: "Item1", external: ""}} item2={{title: "Item2", external: ""}} item3={{title: "Item3", external: ""}} desc={"descrição..."} external={"#"}/>
        </main>
      </div>
      <Footer />
        </>
    )
}