import { motion } from "framer-motion"
import { animationSlideUp, animationSlideLeft, animationSlideRight } from "../../constants/animation.constants"
import { phoneNumber, mapLink, getImagePath } from "../../constants/infoConstants"
import './index.scss'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    
    // Форматирование номера телефона: 77715455555 -> +7 (771) 545-55-55
    const formatPhoneNumber = (phone: number): string => {
        const phoneStr = phone.toString()
        return `+${phoneStr[0]} (${phoneStr.slice(1, 4)}) ${phoneStr.slice(4, 7)}-${phoneStr.slice(7, 9)}-${phoneStr.slice(9)}`
    }

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const openWhatsApp = () => {
        window.open(`https://wa.me/${phoneNumber}`, '_blank')
    }

    return (
        <footer className="footer">
            <div className="footer--container">
                <motion.div 
                    className="footer--brand"
                    {...animationSlideLeft}
                >
                    <img 
                        src={getImagePath('logo.png')} 
                        alt="iDentist Logo" 
                        className="footer--logo"
                        loading="lazy"
                        decoding="async"
                    />
                    <p className="footer--description">
                        Современная стоматологическая клиника с высокими технологиями и профессионализмом врачей
                    </p>
                    <div className="footer--social">
                        <a href="https://instagram.com/identist_kz" target="_blank" rel="noopener noreferrer" className="social--link">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor"/>
                            </svg>
                        </a>
                        <button onClick={openWhatsApp} className="social--link">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" fill="currentColor"/>
                            </svg>
                        </button>
                    </div>
                </motion.div>

                <motion.div 
                    className="footer--links"
                    {...animationSlideUp}
                >
                    <h4 className="links--title">Навигация</h4>
                    <ul className="links--list">
                        <li><a onClick={() => scrollToSection('about')}>О клинике</a></li>
                        <li><a onClick={() => scrollToSection('services')}>Услуги</a></li>
                        <li><a onClick={() => scrollToSection('principles')}>Принципы</a></li>
                        <li><a onClick={() => scrollToSection('team')}>Команда</a></li>
                        <li><a onClick={() => scrollToSection('reviews')}>Отзывы</a></li>
                    </ul>
                </motion.div>

                <motion.div 
                    className="footer--contact"
                    {...animationSlideRight}
                >
                    <h4 className="contact--title">Контакты</h4>
                    <div className="contact--info">
                        <div className="contact--item">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/>
                                <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                            </svg>
                            <span>Проспект Мангилик Ел, 36<br/>Есиль район, Астана</span>
                        </div>
                        <div className="contact--item">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2"/>
                            </svg>
                            <a href={`tel:+${phoneNumber}`} className="contact--link">
                                {formatPhoneNumber(phoneNumber)}
                            </a>
                        </div>
                        <div className="contact--item">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                                <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2"/>
                                <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2"/>
                            </svg>
                            <span>Пн-Пт: 09:00 - 19:00<br/>Сб: 10:00 - 19:00<br/>Вс: Выходной</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.div 
                className="footer--map"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <h4 className="map--title">Как нас найти</h4>
                <div className="map--container">
                    <iframe 
                        src={mapLink}
                        width="100%" 
                        height="400" 
                        frameBorder="0"
                        allowFullScreen
                        style={{ borderRadius: '20px' }}
                        title="Карта местоположения клиники iDentist"
                    />
                </div>
            </motion.div>

            <div className="footer--bottom">
                <div className="footer--bottom--container">
                    <p className="footer--copyright">
                        © {currentYear} iDentist. Все права защищены.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
