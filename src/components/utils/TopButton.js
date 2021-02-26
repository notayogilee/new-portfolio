import React from 'react'
import { Fab } from '@material-ui/core'
import { Navigation } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  button: {
    background: '#333',
    position: 'fixed',
    bottom: '5%',
    right: '5%',
    '@media (max-width: 768px)': {
      display: 'none'
    }
  }
})

const TopButton = () => {
  const classes = useStyles()

  const topOfScreen = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  return (
    <div>
      <Fab onClick={topOfScreen} className={classes.button}>
        <Navigation style={{ color: '#d68438' }} />
      </Fab>
    </div>
  )
}

export default TopButton


