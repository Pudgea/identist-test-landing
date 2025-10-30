import { useState } from "react"
import { motion } from "framer-motion";
import HorizontalBorder from "../common/borders/horizontal.border";
import LazyImage from "../common/lazy-image/lazy-image";
import { animationSlideUp } from "../../constants/animation.constants";
import { getImagePath } from "../../constants/infoConstants";

import './index.scss'

const Review = () => {
    const [hoveredBlock, setHoveredBlock] = useState<number | null>(null)

    const galleryItems = [
        {
            id: 1,
            image1: getImagePath("about/1_1.jpg"),
            image2: getImagePath("about/1_2.jpg"),
            alt: "О клинике"
        },
        {
            id: 2,
            image1: getImagePath("about/2_1.jpg"),
            image2: getImagePath("about/2_2.jpg"),
            alt: "Наши услуги"
        },
        {
            id: 3,
            image1: getImagePath("about/3_1.jpg"),
            image2: getImagePath("about/3_2.jpg"),
            alt: "Команда профессионалов"
        }
    ]

    const blockAnimation = {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        viewport: { once: true, amount: 0.3 }
    }

    return ( 
        <motion.div
            className="review"
            {...animationSlideUp}
        >
            <HorizontalBorder
                txt={"О клинике"}
            />
            <div className="about--container">
                <div className="about--gallery">
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className="gallery--block"
                            {...blockAnimation}
                            onMouseEnter={() => setHoveredBlock(item.id)}
                            onMouseLeave={() => setHoveredBlock(null)}
                        >
                            <div className="block--image-container">
                                <div className={`block--image ${hoveredBlock === item.id ? 'hidden' : 'visible'}`}>
                                    <LazyImage
                                        src={item.image1}
                                        alt={item.alt}
                                    />
                                </div>
                                <div className={`block--image ${hoveredBlock === item.id ? 'visible' : 'hidden'}`}>
                                    <LazyImage
                                        src={item.image2}
                                        alt={item.alt}
                                    />
                                </div>
                                <div className="block--overlay">
                                    <div className="overlay--content">
                                        <h3 className="overlay--title">
                                            {index === 0 && "Современная клиника"}
                                            {index === 1 && "Качественные услуги"}
                                            {index === 2 && "Опытная команда"}
                                        </h3>
                                        <p className="overlay--description">
                                            {index === 0 && "Современное оборудование и технологии"}
                                            {index === 1 && "Полный спектр стоматологических услуг"}
                                            {index === 2 && "Высококвалифицированные специалисты"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="about--content">
                    <p>since 2025</p>
                    <p>iDentist - клиника современного уровня, где высокие технологии сочетаются с профессионализмом врачей</p>
                </div>
            </div>
            {/* <div className="review--container">
                <img src="/place_holder.png" />
                <div className="content">
                    <div className="content--block">
                        <div className="content--block--title">
                            <p>Миссия</p>
                        </div>
                        <div className="content--block--text">
                            <p>Помогать людям становиться счастливее и успешнее, получая удовольствие от красивой улыбки</p>
                        </div>
                    </div>
                    <div className="content--block">
                        <div className="content--block--title">
                            <p>ЦКП</p>
                        </div>
                        <div className="content--block--text">
                            <p>Профессионально оказанные стоматологические услуги с высоким уровнем комфорта, с заботой о каждом пациенте и с результатом на долгие годы</p>
                        </div>
                    </div>
                </div>
            </div> */}
        </motion.div>
     );
}
export default Review;  