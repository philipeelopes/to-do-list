import { Link } from "react-router-dom";
import Styles from "./Menu.module.css";

export default function Menu(){
    return(
        <nav className={Styles.menu}>
            <Link to="/">Home</Link>
            <Link to="/tarefas">Tarefas</Link>
            <Link to="/nova-tarefa">Nova Tarefa</Link>

        </nav>
    );
}