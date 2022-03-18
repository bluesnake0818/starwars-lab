const baseUrl = 'https://swapi.dev'

export function getStarshipList() {
  console.log('sanity')
  return fetch(`${baseUrl}/api/starships`)
  .then(res => res.json())
}

export function getDetails(apiUrl) {
  return fetch(`${apiUrl}`)
  .then(res => res.json())
}