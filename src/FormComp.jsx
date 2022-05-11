import React from  'react'
import AppBar from   '@mui/icons-material'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { withStyles } from '@mui/styles';
import { green, pink } from '@mui/material/colors';
import LockIcon from '@mui/icons-material/Lock';

import styles from "./styles/FormStyles"

class FormComp extends React.Component {
    render() {
        const {classes}=this.props;
        return <React.Fragment>
            <CssBaseline/>
            <Container maxWidth="sm">
                <Box xs={{flexGrow:1}}>
                <Grid container spacing={2}>
                <Grid item xs={8}>
                <Paper>
<Avatar sx={{ bgcolor: pink[500] }}>
<LockIcon />

</Avatar>
                </Paper>

                </Grid>
                    
                </Grid>
                </Box>
            </Container>

        </React.Fragment>
    
    }
}
export default withStyles(styles)(FormComp)