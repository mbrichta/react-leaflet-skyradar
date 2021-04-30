import { useContext, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Context } from '../context';
import { EventListenerComponent } from './EventListenerComponent';
import { PlaneMarker } from './PlaneMarker';

const Home = () => {

    const position = [48, 15.09];
    const { planes } = useContext(Context);

    const renderPlanes = () => {
        return planes.map(plane => (
            <PlaneMarker plane={plane} key={plane[0]} />
        ))
    }

    return (
        <div >
            <MapContainer
                center={position}
                zoom={7}
                scrollWheelZoom={true}
                style={{ height: 500 }}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <EventListenerComponent />
                {renderPlanes()}
            </MapContainer>
        </div>
    )
}

export default Home;