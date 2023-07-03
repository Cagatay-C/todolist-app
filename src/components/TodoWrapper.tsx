import { useState } from "react"
import { TodoForm } from "./TodoForm"
import { v4 as uuidv4 } from "uuid"
import { Todo } from "./Todo"
import { EditTodoForm } from "./EditTodoForm"
uuidv4()

export type todo = {
  id: string
  task: string
  completed: boolean
  isEditing: boolean
}

const TodoWrapper = () => {
  const [todos, setTodos] = useState<todo[]>([])

  const addTodo = (value: string) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: value, completed: false, isEditing: false },
    ])
  }

  const toggleCompleted = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const editTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    )
  }

  const editTask = (task: string, id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    )
  }

  return (
    <div
      className="container"
      style={{
        background: "#1A1A40",
        marginTop: "5rem",
        padding: "2rem",
        borderRadius: "5px",
      }}
    >
      <h1 style={{ color: "#fff" }}>Get Things Done!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm key={index} editTodo={editTask} todo={todo} />
        ) : (
          <Todo
            todo={todo}
            key={index}
            toggleCompleted={toggleCompleted}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  )
}

export default TodoWrapper
