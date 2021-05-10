import { useTheme, makeStyles, Card, Box, Typography } from '@material-ui/core';

export const FlightInfoCard = ({ timePosition, icao, callsign, onGround }) => {

    const lastUpdateDate = new Date(timePosition * 1000);
    const day = lastUpdateDate.getDate();
    const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(lastUpdateDate);

    const theme = useTheme();
    const useStyles = makeStyles({
        flightInfoWrapper: {
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: theme.palette.primary.light,
            borderRadius: 10,
            marginLeft: -45,
            color: theme.palette.text.primary,
            maxWidth: 'max-content',
            zIndex: 6000,
            padding: '10px 15px',
            [theme.breakpoints.down('sm')]: {
                marginLeft: 10,
                minHeight: 140
            },
            [theme.breakpoints.up('md')]: {
                marginLeft: 10,
                minHeight: 130
            }
        },
        titleWrapper: {
            display: 'flex'
        },
        flightInfoRow: {
            display: 'flex',
            marginTop: 10,
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
            <Box className={classes.titleWrapper}>
                <Typography variant="h5">Flight information:</Typography>
            </Box>
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
        </Card>
    )
}