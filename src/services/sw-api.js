const baseUrl = 'https://swapi.dev/api/'

function getAllStarships (){
    return fetch(`${baseUrl}/api/classes`)
        .then(res => res.json())
}

export function getDetails(apiUrl) {
    return fetch(`${baseUrl}${apiUrl}`)
    .then(res => res.json())
}

export function getMonsterList() {
    return fetch(`${baseUrl}/api/monsters`)
    .then(res => res.json())
  }

  export default getAllStarships