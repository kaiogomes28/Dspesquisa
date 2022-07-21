import { ReactComponent as Logo } from '../../assets/logo.svg';
import './styles.css';

const Header = () => (
    <header className="main-header">
        <Logo />
        <a href="/" className="logo-text">
            <span className="logo-text-1">Big Game</span>
            <span className="logo-text-2"> Survey</span>
        </a>
    </header>
);

export default Header;