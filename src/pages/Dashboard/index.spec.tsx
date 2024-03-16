import { render, screen } from "@testing-library/react"
import { Dashboard } from "."

describe('testes do dashboard', () => {
    test('Deve haver um titulo', async () => {
        render(<Dashboard />)

        const title = await screen.findByRole('heading', {
            name: 'Dashboard',

        })

        expect(title).toBeInTheDocument()
    })
})