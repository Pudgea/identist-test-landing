import animationConstants, { animatiomText } from '../../constants/animation.constants';
import { getImagePath } from '../../constants/infoConstants';
import './index.scss'
import { motion } from "framer-motion"

const Hero = () => {
    return ( 
        <div 
            className="hero"
        >
            <motion.div
                className='title'
                {...animatiomText}
            >
                <img 
                    src={getImagePath('logo.png')} 
                    alt="iDentist Logo" 
                    loading="eager"
                    decoding="async"
                />
                <p className="title-p">
                    место, где рождаются <br/> уверенные улыбки
                </p>
            </motion.div>
            <motion.div 
                {...animationConstants}
                className="gallery"
            >
                <img 
                    src={getImagePath('gallery/1.png')} 
                    alt="Фото клиники iDentist 1" 
                    loading="lazy"
                    decoding="async"
                />
                <img 
                    src={getImagePath('gallery/2.png')} 
                    alt="Фото клиники iDentist 2" 
                    loading="lazy"
                    decoding="async"
                />
                <img 
                    src={getImagePath('gallery/3.png')} 
                    alt="Фото клиники iDentist 3" 
                    loading="lazy"
                    decoding="async"
                />
                <img 
                    src={getImagePath('gallery/4.png')} 
                    alt="Фото клиники iDentist 4" 
                    loading="lazy"
                    decoding="async"
                />
            </motion.div>
        </div>
     );
}
 
export default Hero;