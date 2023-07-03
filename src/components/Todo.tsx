import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { todo } from "./TodoWrapper"

type TodoProps = {
  todo: todo
  toggleCompleted: (id: string) => void
  deleteTodo: (id: string) => void
  editTodo: (id: string) => void
}

export const Todo = ({
  todo,
  toggleCompleted,
  deleteTodo,
  editTodo,
}: TodoProps) => {
  const completedStyle = {
    color: "",
    textDecoration: "line-through",
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#8758ff",
        color: "#fff",
        padding: "0.75rem 1rem",
        borderRadius: "5px",
        marginBottom: "1rem",
        cursor: "pointer",
      }}
    >
      <h4
        onClick={() => toggleCompleted(todo.id)}
        style={todo.completed ? completedStyle : {}}
      >
        {todo.task}
      </h4>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editTodo(todo.id)}
        />
        <FontAwesomeIcon
          icon={faTrash}
          style={{ marginLeft: "0.75rem" }}
          onClick={() => deleteTodo(todo.id)}
        />
      </div>
    </div>
  )
}
