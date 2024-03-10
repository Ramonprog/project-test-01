import { render, screen } from '@testing-library/react'
import App from './App'
describe('Testar o componente App', () => {
    test('Deve renderizar o componente App', async () => {
        render(<App />)
        const title = await screen.findAllByRole('heading')
        expect(title).toHaveLength(2)
    })

    test('Devem haver 2 titulos ná página', async () => {
        render(<App />)
        const title = await screen.findByRole('heading', {
            name: 'hello world',
        })
        expect(title).toBeInTheDocument()
    })
})