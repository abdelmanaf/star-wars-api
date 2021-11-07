const baseUrl = 'https://swapi.dev'

export function getAllStartships(){
    return fetch(`${baseUrl}/api/starships`)
        .then(res => res.json())
}

