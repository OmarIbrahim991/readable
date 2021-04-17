const logger = (store) => (next) => (action) => {
    next(action)
    console.group("Action: ", action.type)
        console.log("Action Dispatched: ", action)
        console.log("New State: ", store.getState())
    console.groupEnd()
}

export default logger
