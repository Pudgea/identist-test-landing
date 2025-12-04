import { motion, AnimatePresence } from "framer-motion"
import HorizontalBorder from "../common/borders/horizontal.border"
import LazyImage from "../common/lazy-image/lazy-image"
import { animationSlideUp } from "../../constants/animation.constants"
import { approachesData } from "../../mocks/approachesData"
import { useState } from "react"

import "./index.scss"

interface ApproachCardProps {
    approach: typeof approachesData[0]
    index: number
}

const ApproachCard = ({ approach, index }: ApproachCardProps) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <motion.div
            className="approach--card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <div 
                className="approach--header"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="approach--number">{approach.number}</span>
                <h3 className="approach--title">{approach.title}</h3>
                <span className={`approach--toggle ${isOpen ? 'open' : ''}`}>
                    {isOpen ? '−' : '+'}
                </span>
            </div>
            
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div 
                        className="approach--content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                    >
                        <div className="approach--body">
                            <p className="approach--description">{approach.description}</p>
                            <div className="approach--image">
                                <LazyImage
                                    src={approach.image}
                                    alt={approach.title}
                                />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

const Approaches = () => {
    return (
        <motion.div
            className="approach"
            {...animationSlideUp}
        >
            <HorizontalBorder txt="подход к работе" />
            <div className="approach--list">
                {approachesData.map((approach, index) => (
                    <ApproachCard
                        key={approach.number}
                        approach={approach}
                        index={index}
                    />
                ))}
            </div>
        </motion.div>
    )
}

export default Approaches
