import { fireEvent, render, screen } from "@testing-library/react"
import { SignUp } from "."

const navigateMock = vi.fn()
describe('Testa o componente SignUp', () => {

    vi.mock('react-router-dom', () => ({
        useNavigate: () => navigateMock,
        Link: vi.fn().mockImplementation(props => props.children)
    }))
    test('Devem haver 2 inputs na minha tela', async () => {
        render(<SignUp />)

        const inputs = await screen.findAllByRole('textbox')

        expect(inputs).toHaveLength(2)
    })
    test('Devem haver inputs para nome, email e password', async () => {
        render(<SignUp />)

        const inputPassword = await screen.findByPlaceholderText('Senha')
        const inputName = await screen.findByPlaceholderText('Nome')
        const inputEmail = await screen.findByPlaceholderText('Email')

        expect(inputPassword).toBeInTheDocument()
        expect(inputName).toBeInTheDocument()
        expect(inputEmail).toBeInTheDocument()
    })

    test('Deve um botão na tela', async () => {
        render(<SignUp />)

        const button = await screen.findByRole('button')

        expect(button).toHaveTextContent('Cadastrar')
    })
    test('Deve navegar para a tela de dashboard', async () => {
        render(<SignUp />)

        const button = await screen.findByRole('button')

        fireEvent.click(button)

        expect(navigateMock).toHaveBeenCalledTimes(1)
    })

    test('Deve haver um link para ir para pagina de login', () => {
        render(<SignUp />)

        const link = screen.getByText('Já tem cadastro? Clique aqui!')

        expect(link).toBeInTheDocument()
    })
})