export const animatiomText ={
    initial:{ opacity: 0, y: -50 },
    whileInView:{ opacity: 1, y: 0 },
    transition:{ duration: 0.8, delay: 0.2 },
    viewport:{ once: true, amount: 0.3 }
}

export const animationOpacity ={
    initial:{ opacity: 0},
    whileInView:{ opacity: 1},
    transition:{ duration: 0.8, delay: 0.2 },
    viewport:{ once: true, amount: 0.3 }
}

export const animationSlideUp = {
    initial:{ opacity: 0, y: 50 },
    whileInView:{ opacity: 1, y: 0 },
    transition:{ duration: 0.8, delay: 0.2 },
    viewport:{ once: true, amount: 0.3 }
}

export const animationSlideLeft = {
    initial:{ opacity: 0, x: -50 },
    whileInView:{ opacity: 1, x: 0 },
    transition:{ duration: 0.8, delay: 0.2 },
    viewport:{ once: true, amount: 0.3 }
}

export const animationSlideRight = {
    initial:{ opacity: 0, x: 50 },
    whileInView:{ opacity: 1, x: 0 },
    transition:{ duration: 0.8, delay: 0.2 },
    viewport:{ once: true, amount: 0.3 }
}

export default animationSlideUp