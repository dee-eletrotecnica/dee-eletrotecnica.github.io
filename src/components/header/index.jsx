import { Link } from 'react-router-dom'
import { HeaderStyles } from './styles'


export const Header = () => {

    return (
        <HeaderStyles>
            <div className="header-logo">
                <Link to="/">
                    <img src={""} alt="logo" />
                </Link>
            </div>
            <div className="header-nav">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </HeaderStyles>
    )
}