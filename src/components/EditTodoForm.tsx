import { useState } from "react"
import { todoButtonStyle } from "./TodoForm"
import { todoFormStyle } from "./TodoForm"
import { todo } from "./TodoWrapper"

type EditTodoForm = {
  editTodo: (value: string, id: string) => void
  todo: todo
}

export const EditTodoForm = ({ editTodo, todo }: EditTodoForm) => {
  const [value, setValue] = useState(todo.task)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    editTodo(value, todo.id)
    setValue("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Update Task"
        style={todoFormStyle}
      />
      <button type="submit" style={todoButtonStyle}>
        Update Task
      </button>
    </form>
  )
}
