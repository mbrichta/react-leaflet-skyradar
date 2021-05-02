import { Box, makeStyles, Typography, useTheme } from '@material-ui/core';
import { useContext, useState } from 'react';
import { MapContainer, TileLayer } from "react-leaflet";
import { Context } from '../context';
import { EventListenerComponent } from './EventListenerComponent';
import PlaneInfoPanel from './PlaneInfoPanel';
import { PlaneMarker } from './PlaneMarker';

const Home = () => {

    const theme = useTheme();
    const position = [48, 15.09];
    const { planes, selectedPlane } = useContext(Context);


    const useStyles = makeStyles({
        nav: {
            backgroundColor: theme.colors.primary,
            height: "6%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: theme.palette.text.primary
        }
    })

    const classes = useStyles();

    const renderPlanes = () => {
        let limitRenderedPlanes = 0;
        return planes.map(plane => {
            limitRenderedPlanes++;
            if (limitRenderedPlanes > 300) return null;
            return (
                <PlaneMarker plane={plane} key={plane[0]} />
            )
        })
    }

    return (
        <>
            <Box className={classes.nav}>
                <Typography variant="h5" align="center">Sky Radar</Typography>
            </Box>
            <MapContainer
                center={position}
                zoom={7}
                scrollWheelZoom={true}
                style={{ height: "100%" }}
                minZoom={4}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <EventListenerComponent />
                {planes && renderPlanes()}
            </MapContainer>
            {selectedPlane && <PlaneInfoPanel plane={selectedPlane} />}
        </>
    )
}

export default Home;