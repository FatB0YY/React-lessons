import React, { useEffect } from 'react'
import './App.css'
////////////
import TodoList from './Todo/TodoList'
import Context from './context'
import Loader from './Todo/Loader'
import Modal from './modal/Modal'

const AddTodo = React.lazy(() => import('./Todo/addTodo'))

function App() {
  const [todos, setTodos] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=0')
      .then((response) => response.json())
      .then((todos) => {
        setTodos(todos)
        setLoading(false)
      })
  }, [])

  function toggleTodo(id) {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed
        }
        return item
      })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter((item) => item.id !== id))
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])
    )
  }

  return (
    <Context.Provider value={{ removeTodo: removeTodo }}>
      <div className="container">
        <div className="wrapper">
          <h1>React</h1>
          <h2>Todo</h2>

          <Modal />

          <React.Suspense fallback={<p>lazy...</p>}>
            <AddTodo onCreate={addTodo} />
          </React.Suspense>

          {loading && <Loader />}
          {todos.length ? (
            <TodoList todos={todos} toggleBox={toggleTodo} />
          ) : loading ? null : (
            <p>No todos !</p>
          )}
        </div>
      </div>
    </Context.Provider>
  )
}

export default App
