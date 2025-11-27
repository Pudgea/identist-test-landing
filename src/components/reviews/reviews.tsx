import { motion } from "framer-motion"
import { animationSlideLeft, animationSlideRight } from "../../constants/animation.constants"
import './index.scss'
import HorizontalBorder from "../common/borders/horizontal.border"

const Reviews = () => {
    const reviewsData = [
        {
            id: 1,
            name: "Абылайхан 1",
            rating: 5,
            text: "Безумно боюсь стоматологов и зубной боли, но в этой стоматологии все наоборот. Всё объяснили, успокоили и вылечили кариес абсолютно без боли. Благодарю весь персонал, особенно терапевта Еркебулана Акылбековича. В этой же клинике проходил консультацию у ортодонта/гнатолога Натальи Олеговны - так же остался довольным",
            url: "https://2gis.kz/reviews/70000001101426411/review/190506474"
        },
        {
            id: 2,
            name: "Abby LEE",
            rating: 5,
            text: "Был 30.09.25 в стоматологической клинике Identist. Все солидно, современные технологии, новое оборудование. Ортодонт-гнатолог Наталья Олеговна Рожкова врач профессионал с большой буквы, могу уверенно сказать что в топ 3 по всему Казахстану. Дальнейших успехов вам в вашей работе!",
            url: "https://2gis.kz/reviews/70000001101426411/review/190315022"
        },
        {
            id: 3,
            name: "Kaisar Yssnov",
            rating: 5,
            text: "Айида Нуртасовна — лучший стоматолог, у которого я когда-либо был - всё аккуратно и быстро. Клиника современная, с приятным интерьером и уютной обстановкой. Рекомендую всем!",
            url: "https://2gis.kz/reviews/70000001101426411/review/189372725"
        },
        {
            id: 4,
            name: "rani.",
            rating: 5,
            text: "Хотела бы выразить благодарность стоматологу Данилу Алексеевичу за профессионализм и чуткое отношение. Недавно обратилась к нему с проблемой глубокого кариеса, процедура прошла безболезненно и быстро. Заметила, что врач и его ассистент всегда спрашивали про мое самочувствие 🥺 Благодарю за работу 💞",
            url: "https://2gis.kz/reviews/70000001101426411/review/173738582"
        },
        {
            id: 5,
            name: "Diana S.",
            rating: 5,
            text: "сама клиника шикарная, персонал очень вежливый. особенно понравилась Айида Нуртасовна, которая проводила мне чистку. все сделала аккуратно, быстро и качественно. советую ходить только к ней! 🤍 сама делаю чистку каждые полгода, теперь точно выбрала своего специалиста",
            url: "https://2gis.kz/reviews/70000001101426411/review/188915982"
        },
        {
            id: 6,
            name: "Анара Кусаинова",
            rating: 5,
            text: "Все как я предпочитаю. Супер современное оборудование. Все стерильно (для меня это важно), все автоматизировано. И акция действительно работает. Даже было неловко не платить за такой подход.",
            url: "https://2gis.kz/reviews/70000001101426411/review/170301090"
        }
    ]

    const reviewAnimations = [
        { ...animationSlideLeft, transition: { ...animationSlideLeft.transition, delay: 0.1 } },
        { ...animationSlideRight, transition: { ...animationSlideRight.transition, delay: 0.2 } },
        { ...animationSlideLeft, transition: { ...animationSlideLeft.transition, delay: 0.3 } },
        { ...animationSlideRight, transition: { ...animationSlideRight.transition, delay: 0.4 } },
        { ...animationSlideLeft, transition: { ...animationSlideLeft.transition, delay: 0.5 } },
        { ...animationSlideRight, transition: { ...animationSlideRight.transition, delay: 0.6 } }
    ]

    return (
        <div className="reviews">
            <HorizontalBorder txt="Отзывы наших клиентов" />
            <div className="reviews--container">
                <div className="reviews--grid">
                    {reviewsData.map((review, index) => (
                        <motion.div
                            key={review.id}
                            className="review--card"
                            {...reviewAnimations[index]}
                            onClick={() => window.open(review.url, '_blank')}
                        >
                            <div className="card--header">
                                <div className="reviewer--info">
                                    <h4 className="reviewer--name">{review.name}</h4>
                                    <div className="reviewer--rating">
                                        {[...Array(review.rating)].map((_, i) => (
                                            <span key={i} className="star">★</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="gis--icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#00A651" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M2 17L12 22L22 17" stroke="#00A651" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M2 12L12 17L22 12" stroke="#00A651" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <span className="gis--text">2GIS</span>
                                </div>
                            </div>
                            <p className="review--text">{review.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Reviews
