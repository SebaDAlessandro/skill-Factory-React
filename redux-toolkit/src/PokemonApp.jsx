import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { getPokemons } from "./app/slices/pokemon/thunks"

export const PokemonApp = () => {

    const dispatch = useDispatch()
    const { pokemons = [], isLoading, page } = useSelector(state => state.pokemons)

    useEffect(()=>{
        dispatch(getPokemons())
    }, [])

  return (
    <>
        <h1>Pokemon App</h1>
        <hr />
        <span>Loading: {isLoading ? 'true' : 'false'}</span>
        
        <ul>
            {
                pokemons.map(({name}, index) =>(
                    <li key={index}>{name}</li>
                ))
            }
        </ul>

        <button 
            disabled = {isLoading}
            onClick = {()=>dispatch(getPokemons(page))}
        >
        Next
        </button>
    </>
  )
}
