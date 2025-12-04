import './index.scss'
import ServiceItem from '../service-item/service-item';
import { motion, AnimatePresence } from 'framer-motion';
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
            
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div 
                        className="service-category--content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
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
                )}
            </AnimatePresence>
        </motion.div>
     );
}
 
export default ServiceCategory;

