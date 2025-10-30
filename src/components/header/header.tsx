import { useState } from 'react'
import { getImagePath } from '../../constants/infoConstants';
import AppointmentBtn from '../common/btns/appointment.btn';
import './index.scss'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        setIsMenuOpen(false)
    }

    return (
        <div className="header">
            <img 
                src={getImagePath('logo.png')} 
                className="logo" 
                alt="iDentist Logo"
                loading="eager"
                decoding="async"
            />
            
            <nav className={`nav ${isMenuOpen ? 'nav--open' : ''}`}>
                <ul className="nav--list">
                    <li>
                        <a onClick={() => scrollToSection('about')}>
                            о клинике
                        </a>
                    </li>
                    <li>
                        <a onClick={() => scrollToSection('services')}>
                            услуги
                        </a>
                    </li>
                    <li>
                        <a onClick={() => scrollToSection('principles')}>
                            принципы
                        </a>
                    </li>
                    <li>
                        <a onClick={() => scrollToSection('team')}>
                            команда
                        </a>
                    </li>
                    <li>
                        <a onClick={() => scrollToSection('reviews')}>
                            отзывы
                        </a>
                    </li>
                </ul>
                <div className="nav--actions">
                    <AppointmentBtn/>
                </div>
            </nav>

            <button 
                className={`menu--toggle ${isMenuOpen ? 'menu--toggle--open' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    )
}
 
export default Header;