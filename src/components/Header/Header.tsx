import React from 'react'

//style
import { AppBar, Toolbar, Typography } from '@mui/material'

const Header: React.FC = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h5">Subly</Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header