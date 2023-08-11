import './style.css';
import Logo from '../../assets/logo.svg';
import Profile from '../../assets/profile2.jpg';

export default function Header() {
    return (
        <header>
            <img className='logo' src={Logo} alt='logo' />
            <div className='user'>
                <img className='profile' src={Profile} alt='logo' />
                <span>Bem vindo, Igor</span>
            </div>
        </header>
    )

}


