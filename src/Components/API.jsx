const api = "http://localhost:3001"

export const getAll = () =>
  fetch(`${api}/trips`)
    .then(response => response.json())