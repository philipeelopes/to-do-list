import Styles from "./Header.module.css";

export default function Header(){
    return(
        <header className={Styles.header}>
            <h1>To-do list </h1>
        </header>
    )
}