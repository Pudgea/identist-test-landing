import animationConstants, { animatiomText } from '../../constants/animation.constants';
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
                    src="/logo.png" 
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
                    src="/gallery/1.png" 
                    alt="Фото клиники iDentist 1" 
                    loading="lazy"
                    decoding="async"
                />
                <img 
                    src="/gallery/2.png" 
                    alt="Фото клиники iDentist 2" 
                    loading="lazy"
                    decoding="async"
                />
                <img 
                    src="/gallery/3.png" 
                    alt="Фото клиники iDentist 3" 
                    loading="lazy"
                    decoding="async"
                />
                <img 
                    src="/gallery/4.png" 
                    alt="Фото клиники iDentist 4" 
                    loading="lazy"
                    decoding="async"
                />
            </motion.div>
        </div>
     );
}
 
export default Hero;