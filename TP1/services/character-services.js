const url = 'https://rickandmortyapi.com/api/character'

const listCharacters = ()=> fetch(url).then((respuesta)=> respuesta.json())

export const characterService = {
    listCharacters,
}