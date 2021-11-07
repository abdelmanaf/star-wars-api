const baseUrl = 'https://swapi.dev'

export function getAllStartships(){
    console.log('hello');
    return fetch(`${baseUrl}/api/starships`)
        .then(res => res.json())
}

