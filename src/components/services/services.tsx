import { animationSlideUp, animationSlideLeft } from "../../constants/animation.constants";
import HorizontalBorder from "../common/borders/horizontal.border";
import { motion } from "framer-motion"
import ServiceCategory from "./service-category/service-category";
import { servicesData } from "../../mocks/servicesData";
import './index.scss';

const Services = () => {
    return ( 
        <motion.div
            className="services"
            {...animationSlideUp}
        >
            <motion.div {...animationSlideLeft}>
                <HorizontalBorder
                    txt={"Услуги"}
                />
            </motion.div>
            
            <div className="services--container">
                {servicesData.map((category, index) => (
                    <ServiceCategory
                        key={index}
                        number={category.number}
                        title={category.title}
                        services={category.services}
                    />
                ))}
            </div>
        </motion.div>
     );
}
 
export default Services;