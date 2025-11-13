import { useState, useRef, useEffect } from 'react'
import './index.scss'

interface LazyVideoProps {
    src: string
    alt: string
    className?: string
    poster?: string
}

const LazyVideo = ({ 
    src, 
    alt, 
    className = '',
    poster
}: LazyVideoProps) => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)
    const [videoPoster, setVideoPoster] = useState<string | null>(poster || null)
    const videoRef = useRef<HTMLVideoElement>(null)
    const previewVideoRef = useRef<HTMLVideoElement>(null)

    const handleClick = () => {
        if (!isLoaded) {
            setIsLoaded(true)
        }
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
                setIsPlaying(false)
            } else {
                videoRef.current.play()
                setIsPlaying(true)
            }
        }
    }

    const handleVideoClick = (e: React.MouseEvent) => {
        e.stopPropagation()
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
                setIsPlaying(false)
            } else {
                videoRef.current.play()
                setIsPlaying(true)
            }
        }
    }

    const handleVideoEnded = () => {
        setIsPlaying(false)
    }

    // Извлечение первого кадра из видео для превью
    useEffect(() => {
        if (!poster && previewVideoRef.current) {
            const video = previewVideoRef.current
            
            const captureFrame = () => {
                try {
                    const canvas = document.createElement('canvas')
                    canvas.width = video.videoWidth
                    canvas.height = video.videoHeight
                    const ctx = canvas.getContext('2d')
                    if (ctx) {
                        ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
                        const dataUrl = canvas.toDataURL('image/jpeg')
                        setVideoPoster(dataUrl)
                    }
                } catch (error) {
                    console.error('Error capturing video frame:', error)
                }
            }

            const handleLoadedMetadata = () => {
                video.currentTime = 0.1 // Устанавливаем на первый кадр
            }

            const handleSeeked = () => {
                captureFrame()
            }

            video.addEventListener('loadedmetadata', handleLoadedMetadata)
            video.addEventListener('seeked', handleSeeked)

            return () => {
                video.removeEventListener('loadedmetadata', handleLoadedMetadata)
                video.removeEventListener('seeked', handleSeeked)
            }
        }
    }, [poster])

    return (
        <div 
            className={`lazy-video ${className} ${isLoaded ? 'loaded' : 'not-loaded'}`}
            onClick={handleClick}
        >
            {!poster && (
                <video
                    ref={previewVideoRef}
                    src={src}
                    preload="metadata"
                    className="lazy-video--preview"
                    muted
                    playsInline
                />
            )}
            {!isLoaded && (
                <div className="lazy-video--placeholder">
                    {videoPoster && (
                        <img 
                            src={videoPoster} 
                            alt={alt}
                            className="lazy-video--poster"
                        />
                    )}
                    <div className="play-button">
                        <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" fill="rgba(180, 171, 93, 0.9)" stroke="white" strokeWidth="2"/>
                            <path d="M10 8l6 4-6 4V8z" fill="white"/>
                        </svg>
                    </div>
                </div>
            )}
            {isLoaded && (
                <video
                    ref={videoRef}
                    src={src}
                    className="lazy-video--player"
                    controls
                    loop
                    muted
                    playsInline
                    onClick={handleVideoClick}
                    onEnded={handleVideoEnded}
                    poster={videoPoster || undefined}
                />
            )}
        </div>
    )
}

export default LazyVideo

