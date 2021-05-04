import { useState } from 'react';
import { makeStyles, Box, Typography, Switch, FormControlLabel } from '@material-ui/core';

export const FlightDataBox = ({ velocity, verticalRate, geoAltitude, baroAltitude, latitude, longitude }) => {

    const [toggleSpeed, setToggleSpeed] = useState(false);
    const [toggleVerticalRate, setToggleVerticalRate] = useState(false);
    const [toggleBaroAltitude, setToggleBaroAltitude] = useState(false);
    const [toggleGeoAltitude, setToggleGeoAltitude] = useState(false);

    const useStyles = makeStyles({
        flightData: {
            padding: '75px 50px 50px 50px',
            backgroundColor: '#e4f1f7',
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            marginTop: -35,
        },
        switch: {
            marginLeft: 5
        },
        flightDataBox: {
            marginRight: 25,
            marginBottom: 5,
            flexGrow: 1,
            minWidth: '25%'
        }
    });

    const classes = useStyles();

    return (
        <Box className={classes.flightData}>
            <Box className={classes.flightDataBox}>
                <Box display="flex">
                    <Typography>Speed:</Typography>
                    <FormControlLabel
                        className={classes.switch}
                        control={<Switch size="small" color="primary" />}
                        onChange={() => setToggleSpeed(!toggleSpeed)}
                    />
                </Box>
                {
                    velocity ?
                        <Typography
                            variant="h4"
                            className={classes.infoItem}
                        >
                            {toggleSpeed ?
                                `${Math.round(velocity * 1.944)} knots` :
                                `${Math.round(velocity * 3.6)} km/h`
                            }
                        </Typography> :
                        <Typography
                            variant="h4"
                            className={classes.infoItem}
                        >
                            No Data
                            </Typography>
                }
            </Box>
            <Box className={classes.flightDataBox}>
                <Box display="flex">
                    <Typography>Climing Speed:</Typography>
                    <FormControlLabel
                        className={classes.switch}
                        control={<Switch size="small" color="primary" />}
                        onChange={() => setToggleVerticalRate(!toggleVerticalRate)}
                    />
                </Box>
                {
                    verticalRate ?
                        <Typography
                            variant="h4"
                            className={classes.infoItem}
                        >
                            {toggleVerticalRate ?
                                `${Math.round(verticalRate)} m/s` :
                                `${Math.round(verticalRate * 3.281)} feet/s`
                            }
                        </Typography> :
                        <Typography
                            variant="h4"
                            className={classes.infoItem}
                        >
                            No Data
                            </Typography>
                }
            </Box>
            <Box className={classes.flightDataBox}>
                <Box display="flex">
                    <Typography>Baro Altitud:</Typography>
                    <FormControlLabel
                        className={classes.switch}
                        control={<Switch size="small" color="primary" />}
                        onChange={() => setToggleBaroAltitude(!toggleBaroAltitude)}
                    />
                </Box>
                {
                    baroAltitude ?
                        <Typography
                            variant="h4"
                            className={classes.infoItem}
                        >
                            {toggleBaroAltitude ?
                                `${Math.round(baroAltitude)} m` :
                                `${Math.round(baroAltitude * 3.281)} feet`
                            }
                        </Typography> :
                        <Typography
                            variant="h4"
                            className={classes.infoItem}
                        >
                            No Data
                        </Typography>
                }
            </Box>
            <Box className={classes.flightDataBox}>
                <Box display="flex">
                    <Typography>Geo Altitud:</Typography>
                    <FormControlLabel
                        className={classes.switch}
                        control={<Switch size="small" color="primary" />}
                        onChange={() => setToggleGeoAltitude(!toggleGeoAltitude)}
                    />
                </Box>
                {
                    geoAltitude ?
                        <Typography
                            variant="h4"
                            className={classes.infoItem}
                        >
                            {toggleGeoAltitude ?
                                `${Math.round(geoAltitude)} m` :
                                `${Math.round(geoAltitude * 3.281)} feet`
                            }
                        </Typography> :
                        <Typography
                            variant="h4"
                            className={classes.infoItem}
                        >
                            No Data
                        </Typography>
                }
            </Box>
            <Box className={classes.flightDataBox}>
                <Typography>Latitude: </Typography>
                {
                    latitude ?
                        <Typography
                            variant="h4"
                            className={classes.infoItem}>
                            {latitude}
                        </Typography> :
                        <Typography
                            variant="h4"
                            className={classes.infoItem}
                        >
                            No Data
                        </Typography>
                }
            </Box>
            <Box className={classes.flightDataBox}>
                <Typography>Longitude: </Typography>
                {
                    longitude ?
                        <Typography
                            variant="h4"
                            className={classes.infoItem}>
                            {longitude}
                        </Typography> :
                        <Typography
                            variant="h4"
                            className={classes.infoItem}
                        >
                            No Data
                        </Typography>
                }
            </Box>
        </Box>
    )
}