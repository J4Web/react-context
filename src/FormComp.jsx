import React from  'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { withStyles } from '@mui/styles';
import { pink } from '@mui/material/colors';
import LockIcon from '@mui/icons-material/Lock';
import {Typography} from '@mui/material';
import {Select} from '@mui/material'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import {Input} from '@mui/material';
import { FormControlLabel } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
const styles={
    
    container: {
        padding:"80px",
        display: 'flex!important',
        justifyContent:'center!important',
        alignItems: 'center!important',
    
    },
    topContainer:{
        display: 'flex!important',
        justifyContent:'center',
        flexDirection:"column",
        alignItems: 'center!important',
        padding:"40px"
    },
    form:{
        width:'100%',
        marginTop:"50px"
    },
    submit:{
        minWidth:'100%!important',
    }
    ,select:{
        marginTop:"15px",
        paddingLeft:'5px',
        paddingRight:'5px',
    
    }
}

class FormComp extends React.Component {
    render() {
        const {classes}=this.props;
        return <main >
            <CssBaseline/>
            <Container className={classes.container} >
                <Box xs={{flexGrow:1}} >
                <Grid style={{display:'flex',justifyContent:'center',alignItems: 'center'}} container spacing={1}>
                <Grid item xs={8}>
                <Paper  className={classes.topContainer}>
<Avatar sx={{ bgcolor: pink[500]}}>
<LockIcon />

</Avatar>
<Typography variant="h5">
Sign In

</Typography>
<Select value='english' className={classes.select}>
    <MenuItem value="english">English</MenuItem>
    <MenuItem value="French">French</MenuItem>
    <MenuItem value="Spanish">Spanish</MenuItem>
</Select>
<form className={classes.form}>
<FormControl margin="normal" required fullWidth>
<InputLabel htmlFor="email">
Email
</InputLabel>
<Input id="email" name="email" autoFocus>

</Input>

</FormControl>
<FormControl margin="normal" required fullWidth>
<InputLabel htmlFor="password">
Password
</InputLabel>
<Input id="password" name="password" >

</Input>

</FormControl>
<FormControlLabel control={<Checkbox/>} label="Remember Me"/>
<Button variant="contained" type="submit" color="primary" className={classes.submit}>Sign In</Button>
</form>
                </Paper>

                </Grid>
                    
                </Grid>
                </Box>
            </Container>

       </main>
    }
}
export default withStyles(styles)(FormComp)