import { Icon } from 'leaflet';
import { Marker, Popup } from "react-leaflet";

const planeIcon = new Icon({
    iconUrl: '/icons/plane.svg',
    iconSize: [15, 15]
})

export const PlaneMarker = ({ plane }) => {

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

    const renderPopupHtml = () => (
        <div>
            <h3>Identification:</h3>
            <p>{icao24}</p>
            {callsign ? <p>{callsign}</p> : null}
            <h3>Location:</h3>
            <p>{origin_country}</p>
            {time_position ? <p>{Date(time_position)}</p> : null}
        </div>
    )

    return (
        <Marker position={[latitude, longitude]} icon={planeIcon}>
            <Popup>{renderPopupHtml()}</Popup>
        </Marker>
    )
}