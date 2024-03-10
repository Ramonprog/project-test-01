import { render, screen } from "@testing-library/react"
import { Login } from "."

describe('Testa o componente de Login', () => {
    test('deve haver um titulo escrito "Sign In"', async () => {
        render(<Login />)
        const title = screen.getByRole('heading', {
            level: 2,
            name: 'Sign In'
        })

        expect(title).toBeInTheDocument()
    })
    test('devem haver 2 inputs na tela', async () => {
        render(<Login />)
        const inputs = await screen.findAllByRole('textbox')

        expect(inputs).toHaveLength(2)
    })
})