import { motion } from "framer-motion"
import HorizontalBorder from "../common/borders/horizontal.border"
import LazyImage from "../common/lazy-image/lazy-image"
import { animationSlideLeft, animationSlideRight } from "../../constants/animation.constants"
import { getImagePath } from "../../constants/infoConstants"
import './index.scss'

const Principles = () => {
    const blockAnimation1 = {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay: 0.2 },
        viewport: { once: true, amount: 0.3 }
    }

    const blockAnimation2 = {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay: 0.4 },
        viewport: { once: true, amount: 0.3 }
    }

    return <div className="principles">
        <HorizontalBorder txt="Наши принципы" />
        <div className="principles--container">
            <motion.div 
                className="principles--gallery"
                {...animationSlideLeft}
            >
                <div className="gallery--item">
                    <LazyImage 
                        src={getImagePath("principles/1.jpg")} 
                        alt="Принципы работы"
                    />
                </div>
                <div className="gallery--item">
                    <LazyImage 
                        src={getImagePath("principles/2.jpg")} 
                        alt="Качество обслуживания"
                    />
                </div>
            </motion.div>
            <div className="principles--content">
                <motion.p 
                    className="title"
                    {...animationSlideRight}
                >
                    качество и долгосрочный результат для пациента превыше всего
                </motion.p>
                <div className="blocks">
                    <motion.div 
                        className="block"
                        {...blockAnimation1}
                    >
                        <HorizontalBorder />
                        <p className="block--txt">
                            натуральность, эстетичность и точность в работе
                        </p>
                    </motion.div>
                    <motion.div 
                        className="block"
                        {...blockAnimation2}
                    >
                        <HorizontalBorder />
                        <p className="block--txt">
                            не ищем компромиссов для здоровья наших пациентов
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    </div>
} 

export default Principles