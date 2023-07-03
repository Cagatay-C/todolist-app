import { useState } from "react"

export type TodoFormProps = {
  addTodo: (value: string) => void
}

export const todoFormStyle = {
  outline: "none",
  background: "none",
  border: "1px solid #8758ff",
  padding: "0.5rem 1rem",
  marginTop: "1rem",
  marginBottom: "2rem",
  width: "300px",
  color: "#fff",
}

export const todoButtonStyle = {
  background: "#8758ff",
  color: "#fff",
  border: "none",
  padding: "0.55rem",
  cursor: "pointer",
}

export const TodoForm = ({ addTodo }: TodoFormProps) => {
  const [value, setValue] = useState<string>("")

  const handleSubmit = (e: any) => {
    e.preventDefault()
    addTodo(value)
    setValue("")
  }

  return (
    <form onSubmit={handleSubmit} style={{ width: "%100" }}>
      <input
        type="text"
        placeholder="What is the task today?"
        style={todoFormStyle}
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}
      />
      <button type="submit" style={todoButtonStyle}>
        Add Task
      </button>
    </form>
  )
}
