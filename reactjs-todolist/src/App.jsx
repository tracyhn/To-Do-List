import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState(readLocalStorage)

  function readLocalStorage() {
    const data = JSON.parse(localStorage.getItem('todos'))
    return data.todos
  }

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos:
      newList
    }))
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function deleteTodo(idx) {
    const itemsBefore = todos.slice(0,idx)
    const itemsAfter = todos.slice(idx+1)
    const newTodoList = itemsBefore.concat(itemsAfter)
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEdit(idx, todoValue) {
    const temp = todos
    temp[idx] = todoValue
    setTodos([...temp])
  }

  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos}/>
      <TodoList todos={todos} handleDelete={deleteTodo} handleEdit={handleEdit}/>
    </>
  )
}

export default App
