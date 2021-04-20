const URL = "http://localhost:3001"

const headers = { Authorization: "Bearer default", "Content-Type": "application/json" }

export const get = (resource) => (
    fetch(URL + resource, { headers, })
    .then(response => response.json())
)

export const post = (resource, body) => (
    fetch(URL + resource, { headers, method: "POST", body: JSON.stringify(body), })
    .then(response => response.json())
)
