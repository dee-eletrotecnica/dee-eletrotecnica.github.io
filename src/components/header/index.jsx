import { Link } from 'react-router-dom'
import { HeaderStyles } from './styles'
import { Home } from '../../pages/home/Home'
import logo from "../../assets/logobanner.jpg"

export const Header = () => {

    return (
        <HeaderStyles>
            <img className="banner" src={logo} alt="" />
            {/* <div className="header-logo">
                <Link to="/" element={<Home />}>
                    <img src={logo} alt="Departamento de Engenharia Elétrica" />
                </Link>
            </div>
            <div className="header-nav">
                <Link to="/about">Sobre</Link>
                <Link to="/contact">Contato</Link>
            </div> */}
        </HeaderStyles>
    )
}