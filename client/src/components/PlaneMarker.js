import { Icon } from 'leaflet';
import { useContext } from 'react';
import { Marker, Popup } from "react-leaflet";
import { Context } from '../context';
import { PopupContent } from './PopupContent';

const planeIcon = new Icon({
    iconUrl: '/icons/plane.svg',
    iconSize: [15, 15],
    className: "planeMarker"
})

export const PlaneMarker = ({ plane }) => {

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