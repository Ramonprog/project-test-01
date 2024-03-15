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
    test('devem haver um botão na minha tela', async () => {
        render(<Login />)
        const button = await screen.findByRole('button', {
            name: 'Login'
        })

        expect(button).toBeInTheDocument()
    })
    test('devem haver um input para e-mail', async () => {
        render(<Login />)
        const inputEmail = await screen.findByPlaceholderText('Insira seu e-mail')

        expect(inputEmail).toBeInTheDocument()
    })
    test('devem haver um input para senha', async () => {
        render(<Login />)
        const inputPassword = await screen.findByPlaceholderText('Insira Sua senha')

        expect(inputPassword).toBeInTheDocument()
    })
})