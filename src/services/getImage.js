export function getImage () {
  return fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(data => {
      const { url } = data[0]
      return url
    })
}
