import React, { useContext } from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/Delete'
import { Context } from './context'

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}))

export default function IconLabelButtons() {
  const { dispatch } = useContext(Context)
  const classes = useStyles()
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
        onClick={() =>
          dispatch({
            type: 'clear',
          })
        }
      >
        Delete
      </Button>
    </div>
  )
}
