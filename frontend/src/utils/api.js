const URL = "http://localhost:3001"

const headers = { Authorization: "Bearer default" }

const generateID = () => Math.random().toString(36).substr(-10) + Math.random().toString(36).substr(-10)

export const get = (resource) => (
    fetch(URL + resource, { headers, })
    .then(response => response.json())
)

export const post = (resource, body) => (
    fetch(URL + resource, { ...headers, method: "POST", body, })
    .then(response => response.json())
)
