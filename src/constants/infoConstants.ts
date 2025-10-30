export const phoneNumber = 77715455555
export const mapLink = "https://yandex.kz/map-widget/v1/-/CHWprR0X"
export const email = 'identist.astana@gmail.com'

// Базовый URL для GitHub Pages (в production) или локальной разработки
export const BASE_URL = import.meta.env.BASE_URL || '/'

// Хелпер функция для получения полного пути к изображению
export const getImagePath = (path: string): string => {
    // Убираем начальный слеш если есть
    const cleanPath = path.startsWith('/') ? path.slice(1) : path
    return `${BASE_URL}${cleanPath}`
}