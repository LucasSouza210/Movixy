const event = 'movixy:profile-updated'

export const notifyProfileUpdated = () => {
    window.dispatchEvent(new Event(event))
}

export const onProfileUpdated = (callback: () => void) => {
    window.addEventListener(event, callback)
    return () => window.removeEventListener(event, callback)
}