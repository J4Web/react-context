import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';    
import { IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import {withStyles} from '@mui/styles';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { InputBase } from '@mui/material';
const styles = {
    root:{

    },
    inputRoot:{
color:"inherit",
    },
    inputInput:{
        paddingTop: "1em",
        paddingLeft: "1em",
        paddingRight: "1em",
        paddingBottom: "1em",
        width:"100%",

    }
}

const label = { inputProps: { 'aria-label': 'Switch demo' } };
class NavBar extends Component{
    render() {
        const {classes}=this.props;
        return(<div className='root'>
        <AppBar position="static" color='primary'>
        <Toolbar>
        <Grid
  container
  direction="row"
  justifyContent="space-between"
  alignItems="center"
>

    <Box component="div" sx={{ display: 'inline',textAlign:'center' }}>
        <IconButton size="medium"
        edge="start"
        color="inherit"
        aria-label='Flag-Icon'
        >
        <span>😀</span>
        
        </IconButton>
        <Typography variant="h6" color="inherit">
            Light
        </Typography>
      <Switch {...label } color="secondary" defaultChecked />
</Box>
      <TextField {...label} color="secondary" defaultChecked placeholder="Search..." InputLabelProps={{ shrink: true }}/>
      </Grid>
        </Toolbar>

        </AppBar>

        </div>)
    }
}

export default withStyles(styles)(NavBar)