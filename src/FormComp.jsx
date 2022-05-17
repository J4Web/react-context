import React,{useContext} from  'react'
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
import {LanguageContext} from './contexts/LanguageContainer'
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
const words={ 
    English:{
        email:'Email Address',
        signIn:"Email Address",
        password:"Password",
        rememberMe:"Remember Me"
    },
    French:{
        email: 'Adresse Électronique',
        signIn:"Se Connecter",
        password:"Mot de Passe",
        rememberMe:"Souviens-toi De Moi"
    },
    Spanish:{
        email:'Dirección de correo electrónico',
        password:"Clave",
        signIn:"Iniciar sesión",
        rememberMe:"Recuérdame"
    }
}



function FormComp(props) {
    const value=useContext(LanguageContext);
    const {lang,changeLanguage}=value;
        console.log(lang);
        const {email,signIn,password,rememberMe}= words[lang];
        // console.log(this.context)
        const {classes}=props;
    return (
        <main >
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
{signIn}

</Typography>
<Select value={`${lang}`} className={classes.select} onChange={changeLanguage}>
    <MenuItem value="English">English</MenuItem>
    <MenuItem value="French">French</MenuItem>
    <MenuItem value="Spanish">Spanish</MenuItem>
</Select>
<form className={classes.form}>
<FormControl margin="normal" required fullWidth>
<InputLabel htmlFor={email} placeholder={email}>
{email}
</InputLabel>
<Input id="email" name="email" autoFocus>

</Input>

</FormControl>
<FormControl margin="normal" required fullWidth>
<InputLabel htmlFor={password} placeholder={password}>
{password}
</InputLabel>
<Input id="password" name="password" >

</Input>

</FormControl>
<FormControlLabel control={<Checkbox/>} label={rememberMe}/>
<Button variant="contained" type="submit" color="primary" className={classes.submit}>{signIn}</Button>
</form>
                </Paper>

                </Grid>
                    
                </Grid>
                </Box>
            </Container>

       </main>
       
    )
}

// class FormComp extends React.Component {
//     static contextType=LanguageContext;
//     render() {
//         const {lang,changeLanguage}=this.context;
//         console.log(lang);
//         const {email,signIn,password,rememberMe}= words[lang];
//         // console.log(this.context)
//         const {classes}=this.props;
//         return <main >
//             <CssBaseline/>
//             <Container className={classes.container} >
//                 <Box xs={{flexGrow:1}} >
//                 <Grid style={{display:'flex',justifyContent:'center',alignItems: 'center'}} container spacing={1}>
//                 <Grid item xs={8}>
//                 <Paper  className={classes.topContainer}>
// <Avatar sx={{ bgcolor: pink[500]}}>
// <LockIcon />

// </Avatar>
// <Typography variant="h5">
// {signIn}

// </Typography>
// <Select value={`${lang}`} className={classes.select} onChange={changeLanguage}>
//     <MenuItem value="English">English</MenuItem>
//     <MenuItem value="French">French</MenuItem>
//     <MenuItem value="Spanish">Spanish</MenuItem>
// </Select>
// <form className={classes.form}>
// <FormControl margin="normal" required fullWidth>
// <InputLabel htmlFor={email} placeholder={email}>
// {email}
// </InputLabel>
// <Input id="email" name="email" autoFocus>

// </Input>

// </FormControl>
// <FormControl margin="normal" required fullWidth>
// <InputLabel htmlFor={password} placeholder={password}>
// {password}
// </InputLabel>
// <Input id="password" name="password" >

// </Input>

// </FormControl>
// <FormControlLabel control={<Checkbox/>} label={rememberMe}/>
// <Button variant="contained" type="submit" color="primary" className={classes.submit}>{signIn}</Button>
// </form>
//                 </Paper>

//                 </Grid>
                    
//                 </Grid>
//                 </Box>
//             </Container>

//        </main>
//     }
// }
export default withStyles(styles)(FormComp)