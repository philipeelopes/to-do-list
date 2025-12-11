import Styles from "./Home.module.css";

export default function Home() {
    return (
        <div className={Styles.Home}>
            <h1>Bem-vindo ao Gerenciador de Tarefas</h1>
            <p>Aqui você organiza sua vida de forma simples e rápida.</p>
        </div>
    )
}