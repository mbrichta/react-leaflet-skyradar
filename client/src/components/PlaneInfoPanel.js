import { makeStyles, Box, useTheme } from '@material-ui/core';
import { FlightDepartureBox } from './FlightDepartureBox';
import { FlightInfoCard } from './FlightInfoCard';
import { FlightDataBox } from './FlightDataBox';
import { DataDetailsBox } from './DataDetailBox';
import { CloseIconBox } from './CloseIconBox';

const PlaneInfoPanel = ({ plane }) => {

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
            display: 'flex',
            flexDirection: 'column',
            bottom: 0,
            right: 0,
            zIndex: "5000",
            backgroundColor: theme.palette.text.primary,
            color: theme.palette.text.secondary,
            borderRadius: 5,
            position: 'fixed',
        },
    });
    const classes = useStyles();

    const options = { hour12: true, hour: '2-digit', minute: '2-digit' }
    const lastUpdate = new Date(time_position * 1000).toLocaleTimeString('en-GB', options);
    const lastContact = new Date(last_contact * 1000).toLocaleTimeString('en-GB', options);

    return (
        <Box
            className={classes.root}
            boxShadow={3}
            width={{ xs: "100%", sm: "60%", md: "45%", lg: "35%" }}
            maxHeight={{ xs: "80%", sm: "auto" }}
            position="fixed"
        >
            <CloseIconBox />
            <FlightDepartureBox originCountry={origin_country} />
            <FlightInfoCard
                timePosition={time_position}
                icao={icao24}
                callsign={callsign}
                onGround={on_ground}
            />
            <FlightDataBox
                velocity={velocity}
                verticalRate={vertical_rate}
                baroAltitude={baro_altitude}
                geoAltitude={geo_altitude}
                latitude={latitude}
                longitude={longitude}
            />
            <DataDetailsBox lastUpdate={lastUpdate} lastContact={lastContact} />
        </Box >
    )
}

export default PlaneInfoPanel;