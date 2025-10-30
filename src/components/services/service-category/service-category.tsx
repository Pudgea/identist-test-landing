import './index.scss'
import ServiceItem from '../service-item/service-item';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { animationSlideUp } from '../../../constants/animation.constants';

interface IService {
    name: string;
    price: string;
}

interface IServiceCategory {
    number: string;
    title: string;
    services: IService[];
}

const ServiceCategory = ({ number, title, services }: IServiceCategory) => {
    const [isOpen, setIsOpen] = useState(false);

    return ( 
        <motion.div 
            {...animationSlideUp}
            className="service-category"
        >
            <div 
                className="service-category--header"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="service-category--number">{number}</span>
                <h2 className="service-category--title">{title}</h2>
                <span className={`service-category--toggle ${isOpen ? 'open' : ''}`}>
                    {isOpen ? '−' : '+'}
                </span>
            </div>
            
            <motion.div 
                className="service-category--content"
                initial={false}
                animate={{ 
                    height: isOpen ? 'auto' : 0,
                    opacity: isOpen ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
                <div className="service-category--list">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                                duration: 0.5, 
                                delay: index * 0.1,
                                ease: "easeOut"
                            }}
                        >
                            <ServiceItem
                                name={service.name}
                                price={service.price}
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
     );
}
 
export default ServiceCategory;

