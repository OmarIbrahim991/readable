export const generateID = () => Math.random().toString(36).substr(-10) + Math.random().toString(36).substr(-10)
export const getTimeStamp = () => new Date().getTime()
