import styles from './styles.module.scss'
export function Login() {
    return (
        <div className={styles.container}>
            <h2>Sign In</h2>
            <form>
                <input type="email" placeholder="Insira seu e-mail" />
                <input type="text" placeholder="Insira Sua senha" />
                <button type="submit">Login</button>
            </form>

        </div>
    )

}