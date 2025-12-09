export default function TodoItem({ todo, onToggle, onDelete }) {
 return (
    <li className="todo-item">
        <label>
            <input type="chebox"
            checked={todo.completa}
            onChange={() => onToggle(todo.id)} 
            />
            <span className={todo.completa ? "feito" : ""}>{todo.texto}</span>
        </label>

        <button className="btn-delete" onClick={() => onDelete(todo.id)}>Excluir</button>
    </li>
 )

}