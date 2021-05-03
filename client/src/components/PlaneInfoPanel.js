import { makeStyles, Box, useTheme, Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { useContext, useEffect } from 'react';
import axios from 'axios';
import { Context } from '../context';
import CloseIcon from '@material-ui/icons/Close';

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
            backgroundColor: theme.colors.primary,
            color: theme.palette.text.primary,
            padding: "15px 20px",
            borderRadius: 5
        },
        iconWrapper: {
            width: "100%",
            textAlign: "end",
            position: "absolute",
            left: 0
        },
        close: {
            cursor: "pointer",
            marginRight: 15
        },
        listTitle: {
            padding: "5px 0 8px 5px"
        },
        listItem: {
            padding: "5px 12px"
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
        <Box
            className={classes.root}
            boxShadow={3}
            width={{ xs: "100%", sm: "70%", md: "45%", lg: "25%" }}
        >
            <Box className={classes.iconWrapper}>
                <CloseIcon className={classes.close} onClick={handleClick} />
            </Box>
            <Typography variant="h6" color="textPrimary" className={classes.listTitle}>Location:</Typography>
            <Divider light={false} />
            <Typography className={classes.listItem}><b>Origin country:</b> {origin_country}</Typography>
            <Divider light={false} />
            {time_position ? <Typography className={classes.listItem}><b>Date of last position update: </b>{lastUpdate}</Typography> : null}
            <Divider light={false} />
            {last_contact ? <Typography className={classes.listItem}><b>Date of last contact in general: </b>{lastContact}</Typography> : null}
            <Divider light={false} />
            {latitude ? <Typography className={classes.listItem}><b>Latitude:</b> {latitude}</Typography> : null}
            <Divider light={false} />
            {longitude ? <Typography className={classes.listItem}><b>Longitude:</b> {longitude}</Typography> : null}
            <Divider light={false} />
            <Typography variant="h6" color="textPrimary" className={classes.listTitle}>Details:</Typography>
            <Divider light={false} />
            {baro_altitude ? <Typography className={classes.listItem}><b>Barometric altitud (m):</b> {Math.round(baro_altitude)}</Typography> : null}
            <Divider light={false} />
            {
                velocity ?
                    <Typography className={classes.listItem}><b>Velocity:</b> {Math.round(velocity * 3.6)} km/h | {Math.round(velocity * 1.944)} knots</Typography> :
                    null
            }
            <Divider light={false} />
            {vertical_rate ? <Typography className={classes.listItem}><b>Climing speed:</b> {Math.round(vertical_rate)} m/s</Typography> : null}
            <Divider light={false} />
            {on_ground ? <Typography className={classes.listItem}><b>On ground</b></Typography> : <Typography className={classes.listItem}><b>In air</b></Typography>}
        </Box>
    )
}

export default PlaneInfoPanel;