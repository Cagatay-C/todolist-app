import { useState, useEffect } from "react"
import { EditTodoForm } from "./EditTodoForm"
import { TodoForm } from "./TodoForm"
import { todo } from "./TodoWrapper"
import { Todo } from "./Todo"
import { v4 as uuidv4 } from "uuid"
uuidv4()

export const TodoWrapperLocalStorage = () => {
  const [todos, setTodos] = useState<todo[]>([])

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos") || "") || []
    setTodos(savedTodos)
  }, [])

  const addTodo = (value: string) => {
    const newTodos = [
      ...todos,
      { id: uuidv4(), task: value, completed: false, isEditing: false },
    ]
    setTodos(newTodos)
    localStorage.setItem("todos", JSON.stringify(newTodos))
  }

  const editTask = (task: string, id: string) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
    )
    setTodos(newTodos)
    localStorage.setItem("todos", JSON.stringify(newTodos))
  }

  const toggleCompleted = (id: string) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
    setTodos(newTodos)
    localStorage.setItem("todos", JSON.stringify(newTodos))
  }

  const deleteTodo = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
    localStorage.setItem("todos", JSON.stringify(newTodos))
  }

  const editTodo = (id: string) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
    )
    setTodos(newTodos)
    localStorage.setItem("todos", JSON.stringify(newTodos))
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
