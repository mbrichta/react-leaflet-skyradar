import { useTheme, makeStyles, Box, Typography } from '@material-ui/core';

export const FlightDepartureBox = ({ originCountry }) => {

    const theme = useTheme();
    const useStyles = makeStyles({
        text: {
            fontWeight: 500
        },
        flightTitle: {
            padding: '20px 15px',
            color: 'black',
            opacity: 0.7
        },
        listTitle: {
            padding: "5px 0 8px 5px",
            fontWeight: 'bold'
        },
    });

    const classes = useStyles();

    return (
        <Box className={classes.flightTitle}>
            <Typography className={classes.text}>flight from:</Typography>
            <Typography variant="h2" className={classes.listTitle}>{originCountry}</Typography>
        </Box>
    )
}