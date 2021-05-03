import { makeStyles } from '@material-ui/core';
import { Icon } from 'leaflet';
import { useContext } from 'react';
import { Marker, Popup } from "react-leaflet";
import { Context } from '../context';
import { PopupContent } from './PopupContent';

export const PlaneMarker = ({ plane }) => {

    const useStyles = makeStyles({
        planeIcon: {
            transform: "rotate(90deg)"
        }
    });

    const classes = useStyles()
    const planeIcon = new Icon({
        iconUrl: '/icons/plane.svg',
        iconSize: [15, 15],
        className: classes.planeIcon
    })
    const icao24 = plane[0];
    const longitude = plane[5];
    const latitude = plane[6];
    const { selectedPlane, setSelectedPlane } = useContext(Context);

    const eventHandlerObj = {
        click: () => {
            if (selectedPlane) {
                setSelectedPlane(plane)
            }
        },
    }
    return (
        <Marker position={[latitude, longitude]} icon={planeIcon} eventHandlers={eventHandlerObj}>
            <Popup><PopupContent plane={plane} /></Popup>
        </Marker>
    )
}