import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { IPokemonType } from '../../types/pokemonTypes'
import { useNavigate } from 'react-router-dom';

interface IProps {
    fetchPokemonList: () => Promise<IPokemonType[]>;
}
export function Dashboard({ fetchPokemonList }: IProps) {
    const [pokemonsList, setPokemonsList] = useState<IPokemonType[]>()
    const navigate = useNavigate()

    async function getPokemonsList() {
        const data = await fetchPokemonList()
        setPokemonsList(data)
    }

    useEffect(() => {
        getPokemonsList()
    }, [])

    function handleClickDetails(id: number) {
        navigate(`/details/${id}`)
    }

    return (
        <div className={styles.container}>
            <h1>Dashboard</h1>
            <ul className={styles.containerPokemons}>
                {pokemonsList?.map(pokemon => (
                    <li key={pokemon.id} onClick={() => handleClickDetails(pokemon.id)}>
                        <h1>{pokemon.name}</h1>
                        <img src={pokemon.image} alt={pokemon.name} />
                        <strong>{pokemon.type}</strong>
                    </li>
                ))}
            </ul>
        </div>
    )

}