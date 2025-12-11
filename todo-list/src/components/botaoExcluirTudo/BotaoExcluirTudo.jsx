import styles from './BotaoExcluirTudo.module.css';

export default function BotaoExcluirTudo({ onClear, disabled }) {   

    return(
        <button className={styles.botaoExcluirTudo} 
        onClick={onClear}
        disabled={disabled}
        >
        Excluir Tudo
        </button>
    )
}