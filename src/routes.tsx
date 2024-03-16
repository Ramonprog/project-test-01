import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { SignUp } from "./pages/SignUp";
import { fetchPokemon, fetchPokemonList } from "./services/PokemonService";
import { PokemonDetails } from "./pages/PokemonDetail";

export function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard fetchPokemonList={fetchPokemonList} />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/details/:id" element={<PokemonDetails fetchPokemon={fetchPokemon} />} />
        </Routes>
    )
}