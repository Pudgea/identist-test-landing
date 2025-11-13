import { motion } from "framer-motion";
import { animationSlideLeft, animationSlideRight } from "../../constants/animation.constants";
import { getImagePath } from "../../constants/infoConstants";
import AppointmentBtn from "../common/btns/appointment.btn";
import './index.scss'

const CheckUp = () => {
    const services = [
        "осмотр полости рта",
        "консультация узкопрофильных врачей",
        "снимок КТ",
        "профессиональная гигиена"
    ]

    return (
        <motion.div
            className="checkup"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="checkup--container">
                <motion.div 
                    className="checkup--content"
                    {...animationSlideLeft}
                >
                    <h2 className="checkup--title">ПОЛНЫЙ CHECK UP</h2>
                    <div className="checkup--price">29 900〒</div>
                    <ul className="checkup--services">
                        {services.map((service, index) => (
                            <li key={index}>{service}</li>
                        ))}
                    </ul>
                    <div className="checkup--button">
                        <AppointmentBtn />
                    </div>
                </motion.div>
                <motion.div 
                    className="checkup--image"
                    {...animationSlideRight}
                >
                    <img 
                        src={getImagePath("checkup/2.jpg")}
                        alt="Полный check up в iDentist"
                        loading="lazy"
                        decoding="async"
                    />
                </motion.div>
            </div>
        </motion.div>
    );
}

export default CheckUp;

