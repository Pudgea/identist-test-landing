import { useState, useEffect, useRef } from 'react'
import './index.scss'

interface LazyImageProps {
    src: string
    alt: string
    className?: string
    loading?: 'lazy' | 'eager'
    decoding?: 'async' | 'sync' | 'auto'
    priority?: boolean
}

const LazyImage = ({ 
    src, 
    alt, 
    className = '', 
    loading = 'lazy',
    decoding = 'async',
    priority = false
}: LazyImageProps) => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [isError, setIsError] = useState(false)
    const imgRef = useRef<HTMLImageElement>(null)

    useEffect(() => {
        const img = imgRef.current
        if (!img) return

        // Если изображение уже загружено из кэша
        if (img.complete) {
            setIsLoaded(true)
        }
    }, [])

    const handleLoad = () => {
        setIsLoaded(true)
    }

    const handleError = () => {
        setIsError(true)
        setIsLoaded(true)
    }

    return (
        <div className={`lazy-image ${className} ${isLoaded ? 'loaded' : 'loading'}`}>
            {!isLoaded && !isError && (
                <div className="lazy-image--skeleton">
                    <div className="skeleton--shimmer"></div>
                </div>
            )}
            <img
                ref={imgRef}
                src={src}
                alt={alt}
                className={`lazy-image--img ${isLoaded ? 'visible' : 'hidden'}`}
                loading={priority ? 'eager' : loading}
                decoding={decoding}
                onLoad={handleLoad}
                onError={handleError}
            />
            {isError && (
                <div className="lazy-image--error">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="currentColor"/>
                    </svg>
                    <span>Ошибка загрузки</span>
                </div>
            )}
        </div>
    )
}

export default LazyImage

