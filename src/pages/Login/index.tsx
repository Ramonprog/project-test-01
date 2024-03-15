import { FormEvent } from 'react'
import styles from './styles.module.scss'
import { useNavigate } from 'react-router-dom'
export function Login() {
    const navigate = useNavigate()
    function handleSubmit(e: FormEvent) {
        e.preventDefault()
        navigate('/dashboard')
    }

    return (
        <div className={styles.container}>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Insira seu e-mail" />
                <input type="text" placeholder="Insira Sua senha" />
                <button type="submit">Login</button>
            </form>

        </div>
    )

}