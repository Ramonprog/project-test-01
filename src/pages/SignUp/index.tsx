import { FormEvent } from "react";
import { useNavigate } from 'react-router-dom'
import style from './styles.module.scss'
import { Link } from "react-router-dom";
export function SignUp() {

    const navigate = useNavigate()

    function handleSubmit(e: FormEvent) {

        e.preventDefault()
        navigate('/dashboard')
    }

    return (
        <div className={style.container}>
            <form onSubmit={handleSubmit}>
                <h2>Cadastre-se</h2>
                <input type="text" placeholder="Nome" />
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Senha" />
                <button type="submit">Cadastrar</button>
                <Link to={'/'}>Já tem cadastro? Clique aqui!</Link>
            </form>
        </div>


    )

}