import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../context'

function TodoIten({ todo, index, changeBox }) {
  const { removeTodo } = useContext(Context)

  const classes = []

  if (todo.completed) {
    classes.push('done')
  }

  return (
    <li style={styles.li}>
      <span className={classes.join(' ')}>
        <input
          style={styles.input}
          checked={todo.completed}
          type="checkbox"
          onChange={() => changeBox(todo.id)}
        />
        <strong>{index + 1}</strong>
        &nbsp;
        {todo.title}
      </span>
      <button onClick={removeTodo.bind(null, todo.id)} style={styles.btn}>
        &times;
      </button>
    </li>
  )
}

TodoIten.propTypes = {
  // описываем в качестве значения ключа название св-ва,
  // дальше с помощью библиотеки propTypes определяем ее тип,
  // 1) item: объект и он нам необходим
  //2) номер
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  changeBox: PropTypes.func.isRequired,
}
export default TodoIten

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem 1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '.5rem',
  },
  input: {
    marginRight: '1rem',
  },
  btn: {
    background: 'red',
    borderRadius: '50%',
    color: '#fff',
    border: 'none',
  },
}
