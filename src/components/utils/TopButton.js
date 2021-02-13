import React from 'react'
import { Fab } from '@material-ui/core'
import { Navigation } from '@material-ui/icons'

const TopButton = () => {
  const topOfScreen = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', }}>
      <Fab onClick={topOfScreen} style={{ background: '#333' }}>
        <Navigation style={{ color: '#d68438' }} />
      </Fab>
    </div>
  )
}

export default TopButton


