import './App.css'
import { Card } from './components/card'
import { Header } from './components/header'
import { Footer } from './components/footer'

function App() {

  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="container">
          <Card title={"CEFET-MG"} text={"texto..."} link={"Link"} />
          <Card title={"DEE"} text={"Departamento de Engenharia Elétrica"} link={"#"}/>
          <Card title={"Curso de Eletrotécnica"} text={"texto..."} link={"#"}/>
          <Card title={"Mostra de Cursos"} text={"texto..."} link={"#"}/>
          <Card title={"GitHub dos Professores"} text={"texto..."} link={"#"}/>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
