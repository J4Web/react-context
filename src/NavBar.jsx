import React, { Component } from 'react'
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import {IconButton} from '@mui/material'
import {Typography} from '@mui/material'
import {InputBase} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import { red, green, blue } from '@mui/material/colors';
import { withStyles } from '@mui/styles'
// import styles from './styles/NavBarstyles'
const styles = {
    search:{
        display:"flex",
        justifyContent:"flex-end!important",
        marginRight:"-900px!important",
    }
}
class NavBar extends Component {
  render() {
      const {classes}=this.props;
    return (
      <div >
          <AppBar className={classes.root} position="static" color="primary">
          <Toolbar >
          <IconButton className={classes.menuBtn} color="inherit">
          <span className={classes.flag}>
              🍔
          </span>
          <Typography className={classes.title} variant="h6" color="inherit">
          App Title

          </Typography>
          <ToggleOnIcon/>
          <div className={classes.grow}/>
          <div className={classes.search}>
              <div className={classes.searchIcon}>
                  <SearchIcon/>
              </div>
          </div>

          </IconButton>
          </Toolbar>

          </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(NavBar);