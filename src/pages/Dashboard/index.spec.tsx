import { render, screen } from "@testing-library/react"
import { Dashboard } from "."
import { fetchPokemonList } from "../../services/PokemonService"
import { faker } from "@faker-js/faker"

const mockFetchListPokemonFn = vi.fn(fetchPokemonList).mockImplementation(async () => {
    return [{
        id: 1,
        name: 'Pikachu',
        type: 'Electrico',
        image: faker.image.urlPlaceholder()
    }]
})

describe('testes do dashboard', () => {
    test('Deve haver um titulo', async () => {
        render(<Dashboard fetchPokemonList={mockFetchListPokemonFn} />)

        const title = await screen.findByRole('heading', {
            name: 'Dashboard',

        })

        expect(title).toBeInTheDocument()
    })
    test('Deve haver uma lista com 10 pokemons', async () => {
        render(<Dashboard fetchPokemonList={mockFetchListPokemonFn} />)

        const list = await screen.findAllByRole('list')

        expect(list).toHaveLength(1)
    })
})