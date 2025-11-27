import { motion } from "framer-motion";
import { animationSlideLeft } from "../../constants/animation.constants";
import AppointmentBtn from "../common/btns/appointment.btn";
import { checkupData } from "../../mocks/checkupData";
import './index.scss'

const CheckUp = () => {
    return (
        <div className="checkup-wrapper">
            {checkupData.map((checkup, index) => (
                <motion.div
                    key={checkup.id}
                    className="checkup"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="checkup--container">
                        <motion.div 
                            className="checkup--content"
                            {...animationSlideLeft}
                        >
                            <h2 className="checkup--title">{checkup.title}</h2>
                            <div className="checkup--price-wrapper">
                                {checkup.oldPrice && (
                                    <div className="checkup--old-price">{checkup.oldPrice}</div>
                                )}
                                <div className="checkup--price">{checkup.price}</div>
                            </div>
                            <ul className="checkup--services">
                                {checkup.services.map((service, serviceIndex) => (
                                    <li key={serviceIndex}>{service}</li>
                                ))}
                            </ul>
                            <div className="checkup--button">
                                <AppointmentBtn />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

export default CheckUp;

