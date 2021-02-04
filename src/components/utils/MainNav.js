import React from 'react'

const MainNav = () => {
  return (
    <div className={classes.root} id={open}>
      <div className={classes.circleContainer}>
        <div className={classes.circle}>
          {!open &&
            <IconButton className={classes.iconButton} style={{ left: '60%' }} onClick={handleOpen}>
              <Menu fontSize="lg" className={classes.openButton} />
            </IconButton>
          }
          {open &&
            <IconButton className={classes.iconButton} style={{ left: '50%' }} onClick={handleClose}>
              <Close />
            </IconButton>
          }
        </div>
      </div>
  )
}

export default MainNav
