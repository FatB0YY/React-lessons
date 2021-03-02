import React, { useContext, useState } from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import SaveIcon from '@material-ui/icons/Save'

import { Context } from './context'

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}))

export default function AddNewButton({ text }) {
  const [todoTitle, setTodoTitle] = useState('')
  const { dispatch } = useContext(Context)
  const classes = useStyles()

  const addTodo = (event) => {
    if (todoTitle.trim() !== '') {
      dispatch({
        type: 'add',
        payload: todoTitle,
      })
      //console.log('1')
    }
    //console.log('2')
    setTodoTitle('')
  }

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<SaveIcon />}
        onClick={addTodo}
      >
        Save
      </Button>
    </div>
  )
}
