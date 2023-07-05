import { Link } from 'react-router-dom'
import { HeaderStyles } from './styles'
import { Routes, Route} from 'react-router-dom'


export const Header = () => {

    return (
        <HeaderStyles>
            <div className="header-logo">
                <Link to="/">
                    <img src="" alt="" />
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