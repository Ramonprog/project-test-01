import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { MainRoutes } from "../routes"

describe('Testa o compoennte MainRoutes', () => {
    test('Deve renderizar a pagina de login', () => {
        render(<MemoryRouter initialEntries={['/']}>
            <MainRoutes />
        </MemoryRouter>)
        const title = screen.getByText('Sign In')
        expect(title).toBeInTheDocument()
    })
})