import {postSignUp} from "../others/Axios"

import { Input, MainHome, LinkHome, Button } from "../others/Styled"
import Home from "../Home/Home";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("")
    const [url, setUrl] = useState("");

    useHistory();

    function signUp () {
        const body = {
            email,
            password,
            name,
            url
        };

        postSignUp (body).then((res) => console.log (res.data))
        .catch((err) =>console.error(err))
    }

    return (
        <>
            <Home />
            <MainHome>
                <form onSubmit={signUp}>
                    <Input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <Input type="password" placeholder="senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <Input type="text" placeholder="nome" value={name} onChange={(e) => setName(e.target.value)}/>
                    <Input type="image" placeholder="foto" value={url} onChange={(e) => setUrl(e.target.value)}/>
                    <Button onClick={signUp}>Cadastrar</Button>
                </form>
                
                <Link to="/"><LinkHome>Já tem uma conta? Faça login!</LinkHome></Link>
            </MainHome>
        </>
    );
}