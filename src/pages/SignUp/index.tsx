import { FormEvent } from "react";
import { useNavigate } from 'react-router-dom'
export function SignUp() {

    const navigate = useNavigate()

    function handleSubmit(e: FormEvent) {

        e.preventDefault()
        navigate('/dashboard')
    }

    return (

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <button type="submit">Cadastrar</button>
        </form>

    )

}