import React, { useState, useEffect, useReducer } from 'react'
import TodoList from './TodoList'
import { Context } from './context'
import reducer from './reducer'
import DeleteBtn from './DeleteBtn'
import AddNewButton from './AddNewButton'

// useState, useEffect, useContext, useReducer
export default function App() {
  const [state, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem('todos')) || JSON.stringify([])
  )

  /*state = {
    todos: [
      {id: 1, title: 'First todo', completed: false},
      {id: 2, title: 'Second todo', completed: true},
    ]
  }
  */

  /*
  Как результат функции useState, мы всегда получаем массив состоящий ищ двух эл
  Где 1 эл - это само состояние
  Где 2 эл - это функция которая позволяет изменять состояние
  в функцию useState мы передаем начальное значение того состояния,
  которое мы хотим использовать
  */
  //больше не нужен, так как состояние мы забираем из reducer
  //const [todos, setTodos] = useState([])

  /*
  по умолчанию todoTitle пустая строка
  и далее мы забираем функцию setTodoTitle
  */
  const [todoTitle, setTodoTitle] = useState('')

  //const handleClick = () => console.log('click')

  /*
  вызывается только при старте данного компонента
  забираем те тудуБ которые у нас сохранены локально
  */

  /*
  мы можем реализовывать лайфсайт у хуки в функциональный компоненьов
  первый аргумент то, что будт выполняться
  а вторым, передаем список зависимостей, на который будт откликатьсяя useEffect
  */
  useEffect(() => {
    // уьтечка памяти, удваивается колличество кликов
    //document.addEventListener('click', handleClick)
    //
    localStorage.setItem('todos', JSON.stringify(state))

    // фиксим утечку памяти
    /*
    return () => {
      document.removeEventListener('click', handleClick)
    }
    */
  }, [state])

  const addTodo = (event) => {
    if (event.key === 'Enter') {
      if (event.target.value.trim() !== '') {
        dispatch({
          type: 'add',
          payload: todoTitle,
        })
      }
      /*
      setTodos([
    
          передаем массив содержащий в себе и старые todos
          и новый элемент, у которого titile будет совподать с todoTitle
       
        ...state,
        {
          id: Date.now(),
          title: todoTitle,
          completed: false,
        },
      ])
       */
      //очишаем инпут
      setTodoTitle('')
    }
  }

  /*
  const removeTodo = (id) => {
    setTodos(
      todos.filter((item) => {
        return item.id !== id
      })
    )
  }

  const toggleTodo = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed
        }
        return item
      })
    )
  }
*/

  return (
    <Context.Provider
      value={{
        // toggleTodo,
        // removeTodo,

        dispatch,
      }}
    >
      <div className="container">
        <h1>Todo app</h1>
        <div className="input-field">
          <input
            type="text"
            // здесь мы просто в value помешаем текст из инпута
            value={todoTitle}
            onChange={(event) => setTodoTitle(event.target.value)}
            // при enter добавляем с помощью addTodo, которую мы описываем
            onKeyPress={addTodo}
          />
          <label>Todo name</label>
        </div>
        <div style={styles.blockBtn}>
          <DeleteBtn />
          <AddNewButton value={todoTitle} />
        </div>

        <TodoList todos={state} />
      </div>
    </Context.Provider>
  )
}

const styles = {
  blockBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}
