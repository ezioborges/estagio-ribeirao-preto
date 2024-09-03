import { NavLink } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  return (
    <>
      <nav>
        <NavLink className="mg" to={"/1"}>
          Requisito 1: Sequencia de Fibonacci
        </NavLink>
        <NavLink className="mg" to={"/2"}>
          Requisito 2: Ocorrencias da letra "A"
        </NavLink>
        <NavLink className="mg" to={"/3"}>
          Requisito 3: Exercício de soma
        </NavLink>
        <NavLink className="mg" to={"/4"}>
          Requisito 4:Lógica descoberta
        </NavLink>
        <NavLink className="mg" to={"/5"}>
          Requisito 5:{" "}
        </NavLink>
        <NavLink to={"/"}>Sair</NavLink>
      </nav>
    </>
  );
}

export default NavBar;
