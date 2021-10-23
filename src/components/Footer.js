import React from 'react'
import Container from '@mui/material/Container';
// import { createStyles, makeStyles } from '@mui/material/styles';
// import { createTheme, ThemeProvider } from '@mui/material/styles'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

// const useStyles = makeStyles((theme) => 
//     createStyles({
//     footer:{
//         borderTop: `1px solid ${theme.palette.divider}`,
//         marginTop: theme.spacing(8),
//         paddingTop: theme.spacing(3),
//         paddingBottom: theme.spacing(3),
//         [theme.breakpoints.up('sm')]:{
//             paddingTop: theme.spacing(6),
//             paddingBottom: theme.spacing(6),
//         },
//     },
// }));

// const theme = createTheme();

function Copyright() {
    return (
        <Typography variant='body2' color='textSecondary' align='center'>
            {'Copyright 0 '}
            <Link color='innherit' href='https://material-ui.com/'>
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const footers = [
    {
        title: 'Company',
        description: ['Team', 'History', 'Contact us', 'Locations'],
    },
    {
        title: 'Features',
        description: [
            'Cool Stuff',
            'Random Feature',
            'Team Feature',
            'Developer stuff',
            'Another one',
        ]
    },
    {
        title: 'Resources',
        description: [
            'Resource',
            'Resource name',
            'Another resource',
            'Final resource',
        ],
    },
    {
        title: 'Legal',
        description: ['Privacy policy', 'Terms of use'],
    }
]


function Footer() {

    // const classes = useStyles();
    return (
        // <ThemeProvider theme={theme}>

        <React.Fragment>
            <Container maxWidth='md' component='footer' >
                {/* className={classes.footer} */}
                <Grid container spacing={4} justify="space-evenly">
                    {footers.map((footer) => (
                        <Grid item xs={6} sm={3} key={footer.title}>
                            <Typography variant='h6' color='primary' >
                                {footer.title}
                            </Typography>
                            <ul>
                                {footer.description.map((item) => (
                                    <li key={item}>
                                        <Link href="#" variant='subtitle' color='textPrimary'>
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Grid>
                    ))}
                </Grid>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container>
        </React.Fragment>
        // </ThemeProvider>
    )
}

export default Footer