export const notification = {
    create(status, message) {
        return { type: 'SET_NOTIFICATION', payload: { status, message } }
    },
    reset() {
        return { type: 'SET_NOTIFICATION', payload: { status: '', message: '' } }
    }
}

export const error = {
    
}
