import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import HorizontalBorder from "../common/borders/horizontal.border"
import LazyImage from "../common/lazy-image/lazy-image"
import { animationSlideUp } from "../../constants/animation.constants"
import './index.scss'
import { getImagePath } from "../../constants/infoConstants"

interface WorkImage {
    src: string
    label: string
}

interface Work {
    id: number
    title: string
    before?: string
    after?: string
    images: WorkImage[]
}

const worksData: Work[] = [
    {
        id: 1,
        title: "лечение вторичного кариеса и замена пломбы с реставрацией",
        before: "вторичный кариес",
        after: "лечение и замена пломбы с реставрацией",
        images: [
            { src: "/works/1/before.JPG", label: "До" },
            { src: "/works/1/after.JPG", label: "После" }
        ]
    },
    {
        id: 2,
        title: "вторичный кариес под пломбой / работа после с заменой пломбы и реставрацией",
        before: "вторичный кариес под пломбой",
        after: "замена пломбы и реставрация",
        images: [
            { src: "/works/2/before.JPG", label: "До" },
            { src: "/works/2/between.JPG", label: "В процессе" },
            { src: "/works/2/after.JPG", label: "После" }
        ]
    },
    {
        id: 3,
        title: "вторичный кариес под пломбой/замена пломбы с реставрацией",
        before: "вторичный кариес под пломбой",
        after: "замена пломбы с реставрацией",
        images: [
            { src: "/works/3/before.JPG", label: "До" },
            { src: "/works/3/between.JPG", label: "В процессе" },
            { src: "/works/3/after.JPG", label: "После" }
        ]
    },
    {
        id: 4,
        title: "глубокий кариес/лечение глубокого кариеса с установкой пломбы и художественной реставрацией",
        before: "глубокий кариес",
        after: "лечение с установкой пломбы и художественной реставрацией",
        images: [
            { src: "/works/4/before.JPG", label: "До" },
            { src: "/works/4/between.JPG", label: "В процессе" },
            { src: "/works/4/after.JPG", label: "После" }
        ]
    },
    {
        id: 5,
        title: "под герметизацией фиссур образовался кариес/лечение кариеса и установка пломбы с художественной реставрацией",
        before: "под герметизацией фиссур образовался кариес",
        after: "лечение кариеса и установка пломбы с художественной реставрацией",
        images: [
            { src: "/works/5/before.JPG", label: "До" },
            { src: "/works/5/between.JPG", label: "В процессе" },
            { src: "/works/5/after.JPG", label: "После" }
        ]
    },
    {
        id: 6,
        title: "глубокий кариес/лечение глубокого кариеса с художественной реставрацией",
        before: "глубокий кариес",
        after: "лечение глубокого кариеса с художественной реставрацией",
        images: [
            { src: "/works/6/before.JPG", label: "До" },
            { src: "/works/6/between.JPG", label: "В процессе" },
            { src: "/works/6/after.JPG", label: "После" }
        ]
    }
]

const Works = () => {
    const [isMobile, setIsMobile] = useState(false)
    const [showAll, setShowAll] = useState(false)
    const initialCount = 2

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768)
        }
        
        checkMobile()
        window.addEventListener('resize', checkMobile)
        
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    const displayedWorks = isMobile && !showAll 
        ? worksData.slice(0, initialCount)
        : worksData

    const hasMore = isMobile && !showAll && worksData.length > initialCount

    return (
        <motion.div
            className="works"
            {...animationSlideUp}
        >
            <HorizontalBorder txt="наши работы" />
            <div className="works--container">
                {displayedWorks.map((work, index) => (
                    <WorkSlider key={work.id} work={work} index={index} />
                ))}
            </div>
            {hasMore && (
                <motion.div
                    className="works--load-more"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                >
                    <button
                        className="works--load-btn"
                        onClick={() => setShowAll(true)}
                    >
                        Загрузить больше
                    </button>
                </motion.div>
            )}
        </motion.div>
    )
}

interface WorkSliderProps {
    work: Work
    index: number
}

const WorkSlider = ({ work, index }: WorkSliderProps) => {
    const [currentImage, setCurrentImage] = useState(0)
    const touchStartX = useRef<number | null>(null)
    const touchEndX = useRef<number | null>(null)

    const minSwipeDistance = 50

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % work.images.length)
    }

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + work.images.length) % work.images.length)
    }

    const goToImage = (index: number) => {
        setCurrentImage(index)
    }

    const onTouchStart = (e: React.TouchEvent) => {
        touchEndX.current = null
        touchStartX.current = e.targetTouches[0].clientX
    }

    const onTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.targetTouches[0].clientX
    }

    const onTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return
        
        const distance = touchStartX.current - touchEndX.current
        const isLeftSwipe = distance > minSwipeDistance
        const isRightSwipe = distance < -minSwipeDistance

        if (isLeftSwipe && work.images.length > 1) {
            nextImage()
        }
        if (isRightSwipe && work.images.length > 1) {
            prevImage()
        }
    }

    const workAnimation = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay: index * 0.1 },
        viewport: { once: true, amount: 0.3 }
    }

    return (
        <motion.div
            className="work--item"
            {...workAnimation}
        >
            <div className="work--slider-container">
                <div 
                    className="work--slider"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentImage}
                            className="work--image-wrapper"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <LazyImage
                                src={getImagePath(work.images[currentImage].src)}
                                alt={`${work.title} - ${work.images[currentImage].label}`}
                                className="work--image"
                            />
                        </motion.div>
                    </AnimatePresence>

                    {work.images.length > 1 && (
                        <>
                            <button
                                className="work--nav-btn work--nav-btn-prev"
                                onClick={prevImage}
                                aria-label="Предыдущее изображение"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                            <button
                                className="work--nav-btn work--nav-btn-next"
                                onClick={nextImage}
                                aria-label="Следующее изображение"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>

                            <div className="work--dots">
                                {work.images.map((_, idx) => (
                                    <button
                                        key={idx}
                                        className={`work--dot ${currentImage === idx ? 'active' : ''}`}
                                        onClick={() => goToImage(idx)}
                                        aria-label={`Перейти к изображению ${idx + 1}`}
                                    />
                                ))}
                            </div>

                            <div className="work--image-label">
                                {work.images[currentImage].label}
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div className="work--title">
                {work.before && work.after ? (
                    <>
                        <span className="work--title-before">{work.before}</span>
                        <span className="work--title-separator"> — </span>
                        <span className="work--title-after">{work.after}</span>
                    </>
                ) : (
                    work.title
                )}
            </div>
        </motion.div>
    )
}

export default Works

