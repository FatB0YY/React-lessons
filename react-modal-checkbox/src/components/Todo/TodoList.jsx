import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from '../Todo/TodoIten'

function TodoList(props) {
  return (
    <ul style={styles.ul}>
      {props.todos.map((item, index) => {
        return (
          <TodoItem
            todo={item}
            key={item.id}
            index={index}
            changeBox={props.toggleBox}
          />
        )
      })}
    </ul>
  )
}

const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
}

TodoList.propTypes = {
  // описываем в качестве значения ключа название св-ва,
  // дальше с помощью библиотеки propTypes определяем ее тип,
  // 1) массив
  // 2) массив из объектов
  // 3) нужен для работы данного компонента ...
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleBox: PropTypes.func.isRequired,
}
export default TodoList
