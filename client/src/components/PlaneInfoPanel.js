import { makeStyles, Box, useTheme } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { useContext, useEffect } from 'react';
import axios from 'axios';
import { Context } from '../context';

const PlaneInfoPanel = ({ plane }) => {

    const { selectedPlane, setSelectedPlane } = useContext(Context);

    const [
        icao24,
        callsign,
        origin_country,
        time_position,
        last_contact,
        longitude,
        latitude,
        baro_altitude,
        on_ground,
        velocity,
        true_track,
        vertical_rate,
        sensors,
        geo_altitude,
        squawk,
        spi,
        position_source
    ] = plane;

    const theme = useTheme();
    const useStyles = makeStyles({
        root: {
            position: "fixed",
            bottom: 0,
            zIndex: "5000",
            height: "70vh",
            width: "90%",
            backgroundColor: theme.colors.primary,
            color: theme.palette.text.primary,
            padding: 15,
            borderRadius: 5
        },
        close: {
            cursor: "pointer"
        }
    });

    const classes = useStyles();

    useEffect(() => {
        const getData = async () => {
            const todayUnix = Math.floor(Date.now() / 1000);
            const yesterdaysUnix = new Date(Date.now() - (86400000 * 200)).getTime() - 1;

            console.log(yesterdaysUnix)
            try {
                const promise = await axios.get(`https://28mathias23:Mb28099423@opensky-network.org/api/flights/aircraft?icao24=${icao24}&begin=${yesterdaysUnix}&end=${todayUnix}`)
                const data = await promise.data;

                console.log(data)
            } catch (error) {
                console.error(error)
            }

        }

        getData()
    }, [plane])

    const handleClick = () => {
        setSelectedPlane(null)
    }

    const lastUpdate = new Date(time_position * 1000).toLocaleDateString('en-GB');
    const lastContact = new Date(last_contact * 1000).toLocaleDateString('en-GB');

    return (
        <Box className={classes.root} boxShadow={3}>
            <Typography className={classes.close} variant="body2" align="right" onClick={handleClick}>X</Typography>
            <Typography variant="h6" color="textPrimary">Location:</Typography>
            <p><b>Origin country:</b> {origin_country}</p>
            {time_position ? <p><b>Date of last position update: </b>{lastUpdate}</p> : null}
            {last_contact ? <p><b>Date of last contact in general: </b>{lastContact}</p> : null}
            {latitude ? <p><b>Latitude:</b> {latitude}</p> : null}
            {longitude ? <p><b>Longitude:</b> {longitude}</p> : null}
            {baro_altitude ? <p><b>Barometric altitud (m):</b> {Math.round(baro_altitude)}</p> : null}
            <Typography variant="h6" color="textPrimary">Details:</Typography>
            {
                velocity ?
                    <p><b>Velocity:</b> {Math.round(velocity * 3.6)} km/h | {Math.round(velocity * 1.944)} knots</p> :
                    null
            }
            {vertical_rate ? <p><b>Climing speed:</b> {Math.round(vertical_rate)} m/s</p> : null}
        </Box>
    )
}

export default PlaneInfoPanel;