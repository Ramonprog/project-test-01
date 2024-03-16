import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { IPokemonType } from "../../types/pokemonTypes";

interface IProps {
    fetchPokemon: (id: number) => Promise<IPokemonType>
}

export function PokemonDetails({ fetchPokemon }: IProps) {
    const { id } = useParams()
    const [pokemon, setPokemon] = useState<IPokemonType>({
        id: 0,
        name: '',
        image: '',
        type: '',
    })

    const getOnePokemonDetails = async () => {
        const data = await fetchPokemon(Number(id))
        setPokemon(data)
    }

    useEffect(() => {
        getOnePokemonDetails()
    }, [])

    return (
        <div>
            <div>
                <h1>{pokemon?.name}</h1>
                <img src={pokemon?.image} alt={pokemon?.name} />
                <strong>{pokemon?.type}</strong>
            </div>
            <Link to={'/dashboard'}>Voltar</Link>
        </div>
    )

}