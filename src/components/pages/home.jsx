import { Card } from '../card'
import { Header } from '../header'
import { Footer } from '../footer'
import { IntroComponent } from '../introComponent'



export const Home = () => {
    
    return (
        <>
        <Header />
      <div className="wrapper">
      <IntroComponent />
        <main className="container">
          <Card title={"CEFET-MG"} desc={"Descrição..."} item1={"Item1"} item2={"item2"} item3={"item3"} external={"https://www.cefetmg.br/"} />
          <Card title={"DEE"} item1={"Item1"} item2={"item2"} item3={"item3"} desc={"Departamento de Engenharia Elétrica"} external={"#"}/>
          <Card title={"Curso de Eletrotécnica"} item1={"https://github.com/Epaminondaslage/Kit-IoT"} item2={"https://github.com/Epaminondaslage/Kit-SBC-Linux"} item3={"item3"} desc={"Descrição..."} external={"#"}/>
          <Card title={"Mostra de Cursos 2023"} item1={{title: "Kit IoT", external: "https://github.com/Epaminondaslage/Kit-IoT"}} item2={"item2"} item3={"item3"} desc={"Descrição..."} external={"#"}/>
          <Card title={"GitHub dos Professores"} item1={"Item1"} item2={"item2"} item3={"item3"} desc={"descrição..."} external={"#"}/>
          <Card title={"Card Exemplo"} item1={"Item1"} item2={"item2"} item3={"item3"} desc={"descrição..."} external={"#"}/>
        </main>
      </div>
      <Footer />
        </>
    )
}