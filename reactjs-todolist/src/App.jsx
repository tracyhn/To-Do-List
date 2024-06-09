import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([
    'Go to the gym',
    'Eat more fruits and vege',
    'Pick up the kids from school'
  ])

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
  }

  function deleteTodo(idx) {
    const itemsBefore = todos.slice(0,idx)
    const itemsAfter = todos.slice(idx+1)
    const newTodoList = itemsBefore.concat(itemsAfter)
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
