const URL = "http://localhost:3001"

const headers = { Authorization: "Bearer default", "Content-Type": "application/json" }

export const get = (resource) => (
    fetch(URL + resource, { headers, })
    .then(response => response.json())
)

export const post = (resource, params) => (
    fetch(URL + resource, { headers, method: "POST", body: JSON.stringify(params), })
    .then(response => response.json())
)

export const remove = (resource) => (
    fetch(URL + resource, { headers, method: "DELETE" })
)

export const put = (resource, params) => (
    fetch(URL + resource, { headers, method: "PUT", body: JSON.stringify(params) })
)
