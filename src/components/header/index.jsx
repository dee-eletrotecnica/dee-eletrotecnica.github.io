import { Link } from 'react-router-dom'
import { HeaderStyles } from './styles'
import { Home } from '../../pages/home'

export const Header = () => {

    return (
        <HeaderStyles>
            <div className="header-logo">
                <Link to="/" element={<Home />}>
                    <img src="" alt="" />
                </Link>
            </div>
            <div className="header-nav">
                <Link to="/" element={<Home/>}>Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </HeaderStyles>
    )
}