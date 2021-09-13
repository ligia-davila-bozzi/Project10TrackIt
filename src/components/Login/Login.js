import { Input, LinkHome, MainHome, Button } from "../others/Styled"
import Home from "../Home/Home";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <>
            <Home />
            <MainHome>
                <form>
                    <Input type="email" placeholder="email" />
                    <Input type="password" placeholder="senha" />
                    <Button>Entrar</Button>
                </form>
                <Link to="/cadastro">
                    <LinkHome>Não tem uma conta? Cadastre-se!</LinkHome>
                </Link>
            </MainHome>
        </>
    );
}