import { useTheme, makeStyles, Card, CardContent, Box, Typography } from '@material-ui/core';

export const FlightInfoCard = ({ timePosition, icao, callsign, onGround }) => {

    const lastUpdateDate = new Date(timePosition * 1000);
    const day = lastUpdateDate.getDate();
    const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(lastUpdateDate);

    const theme = useTheme();
    const useStyles = makeStyles({
        flightInfoWrapper: {
            backgroundColor: theme.palette.primary.light,
            padding: "5px",
            borderRadius: 10,
            marginLeft: -45,
            color: theme.palette.text.primary,
            width: '80%',
            position: 'relative'
        },
        flightInfoRow: {
            display: 'flex',
            marginTop: 10
        },
        flightInfoCol: {
            padding: "5px 15px 5px 0",
            borderRight: "dotted 1px",
            textAlign: "center",
            marginRight: 10
        },
        smallText: {
            fontWeight: 300
        },
        onAirText: {
            fontWeight: 600,
            fontStyle: 'oblique',
            color: "green",
        },
        onGroundText: {
            fontWeight: 600,
            fontStyle: 'oblique',
            color: "blue"
        },
    });

    const classes = useStyles();

    return (
        <Card className={classes.flightInfoWrapper}>
            <CardContent>
                <Typography variant="h5">Flight information:</Typography>
                <Box className={classes.flightInfoRow}>
                    <Box className={classes.flightInfoCol}>
                        <Typography className={classes.smallText} >Date:</Typography>
                        <Typography>{day} {month}</Typography>
                    </Box>
                    <Box className={classes.flightInfoCol}>
                        <Typography className={classes.smallText}>Icao:</Typography>
                        <Typography>{icao}</Typography>
                    </Box>
                    <Box className={classes.flightInfoCol}>
                        <Typography className={classes.smallText}>Callsign:</Typography>
                        {
                            callsign ?
                                <Typography>{callsign}</Typography> :
                                <Typography>No callsign found</Typography>
                        }
                    </Box>
                    <Box display="flex" flexDirection="column" justifyContent="center">
                        {
                            onGround ?
                                <Typography className={classes.onGroundText}>On Ground</Typography> :
                                <Typography className={classes.onAirText}>On Air</Typography>
                        }
                    </Box>
                </Box>
            </CardContent>
        </Card>
    )
}