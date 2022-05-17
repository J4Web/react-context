import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';    
import { IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import {withStyles} from '@mui/styles';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {ThemeContext} from './contexts/ThemeContext'
// import {withLangContext} from './contexts/LanguageContainer'
import {LanguageContext} from './contexts/LanguageContainer'
const styles = {

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
 const words={
        English: {
            flag:"🇬🇧",
            Search:"Search",
            Light:"Light",
            Dark:"Dark",

        },
        French:{
            flag:"🇵🇫",
            Search:"chercher",
            Dark:"foncée",
            Light:"Légère"

        },
        Spanish:{
            flag:"🇪🇸",
            Search:"búsqueda",
            Light:"Ligera",
            Dark:"Oscura"
        }
    }

const label = { inputProps: { 'aria-label': 'Switch demo' } };


function NavBar(props) {
    const val=useContext(ThemeContext);
    const val2=useContext(LanguageContext);
    console.log(val2)
    console.log(val)
         const {isDarkMode,handleChange}=val;
        const {lang}=val2
        const {flag,Search,Light,Dark}=words[lang]
        // const bgcolor=
        // console.log(flag, Search)
    return (<div className='root'>
        <AppBar position="static" color={isDarkMode?'primary':'default'}>
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
        <span>{flag}</span>
        
        </IconButton>
        <Typography variant="h6" color="inherit">
            {isDarkMode? Dark:Light}
        </Typography>
      <Switch {...label } color="secondary" defaultChecked onChange={handleChange} />
</Box>
      <TextField {...label} color="secondary" defaultChecked placeholder={`${Search}...`} InputLabelProps={{ shrink: true }}/>
      </Grid>
        </Toolbar>

        </AppBar>

        </div>
    )
}

// class NavBar extends Component{
//     static contextType = ThemeContext;
//     constructor(props)
//     {
//         super(props);
//         this.handleChange=this.handleChange.bind(this);
//     }
//  handleChange()
//     {
//         this.context.handleChange()
//     }
//     render() {
//         const {isDarkMode}=this.context;
//         const {langContext}=this.props
//         const {flag,Search,Light,Dark}=words[langContext.lang]
//         // const bgcolor=
//         console.log(flag, Search)

//         return(<div className='root'>
//         <AppBar position="static" color={isDarkMode?'primary':'default'}>
//         <Toolbar>
//         <Grid
//   container
//   direction="row"
//   justifyContent="space-between"
//   alignItems="center"
// >

//     <Box component="div" sx={{ display: 'inline',textAlign:'center' }}>
//         <IconButton size="medium"
//         edge="start"
//         color="inherit"
//         aria-label='Flag-Icon'
//         >
//         <span>{flag}</span>
        
//         </IconButton>
//         <Typography variant="h6" color="inherit">
//             {isDarkMode? Dark:Light}
//         </Typography>
//       <Switch {...label } color="secondary" defaultChecked onChange={this.handleChange} />
// </Box>
//       <TextField {...label} color="secondary" defaultChecked placeholder={`${Search}...`} InputLabelProps={{ shrink: true }}/>
//       </Grid>
//         </Toolbar>

//         </AppBar>

//         </div>)
//     }
// }

export default withStyles(styles)(NavBar)