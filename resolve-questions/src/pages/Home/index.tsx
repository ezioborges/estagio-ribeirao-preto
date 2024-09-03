import { useNavigate } from "react-router-dom";
import Subtitle from "../../components/Subtitle";
import Title from "../../components/Title";

function Home() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/1');
    };
    return (
        <>
            <Title>Bem-vindos ao ambiente de avaliações</Title>
            <Subtitle>Para acessar a resolução dos exercícios clique no botão abaixo</Subtitle>
            <button onClick={handleClick}>Entrar</button>
        </>
    );
 };

export default Home;
