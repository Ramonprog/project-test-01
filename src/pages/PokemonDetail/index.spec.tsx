import { render, screen } from "@testing-library/react"
import { PokemonDetails } from "."
import { fetchPokemon } from "../../services/PokemonService"
import { faker } from "@faker-js/faker"
import * as rrd from 'react-router-dom'

const mockFn = vi.fn(fetchPokemon)
const mockFetchPokemonDetails = mockFn.mockImplementation(async () => {
    return {
        id: 1,
        name: 'Picachu',
        image: faker.image.urlPlaceholder(),
        type: 'Eletrico'
    }
})


describe('Testa o componente PokemonDetails', () => {

    vi.mock('react-router-dom', () => {
        return {
            useParams: () => ({ id: 1 }),
            Link: vi.fn().mockImplementation(props => props.children)
        }
    })

    test('Deve haver um titulo na página', async () => {
        render(<PokemonDetails fetchPokemon={mockFetchPokemonDetails} />)

        const picachu = await screen.findByText('Picachu')

        expect(picachu).toBeInTheDocument()
    })
    test('Deve haver link para voltar', async () => {
        render(<PokemonDetails fetchPokemon={mockFetchPokemonDetails} />)

        const linkBack = await screen.findByText('Voltar')

        expect(linkBack).toBeInTheDocument()
    })
    test('Deve validar quando não vier parâmetro na rota', async () => {
        //serve para testar quando o useParams não vier parâmetro na rota
        vi.spyOn(rrd, 'useParams').mockImplementationOnce(() => ({ id: '0' }))
        render(<PokemonDetails fetchPokemon={mockFetchPokemonDetails} />)

        const errorText = await screen.findByText('O id não é válido')
        expect(errorText).toBeInTheDocument()
    })
})