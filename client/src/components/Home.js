import { useEffect, useContext } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import { Icon } from 'leaflet';
import axios from 'axios';
import { Context } from '../context';

const planeIcon = new Icon({
    iconUrl: '/icons/plane.svg',
    iconSize: [25, 25]
})

const EventListenerComponent = () => {

    const { setPlanes } = useContext(Context)

    const map = useMapEvents({
        click: () => {
            map.locate()
        },
        moveend: async () => {
            const { _northEast, _southWest } = map.getBounds();
            const res = await axios.get(`http://localhost:5000/api/area/${_southWest.lat}/${_southWest.lng}/${_northEast.lat}/${_northEast.lng}`);
            setPlanes(res.data.states)
        }
    })

    return null;
}

const Home = () => {

    const position = [51.505, -0.09];
    const { planes } = useContext(Context);

    useEffect(() => {
        console.log(planes)
    }, [planes])

    return (
        <div >
            <MapContainer
                center={position}
                zoom={7}
                scrollWheelZoom={true}
                style={{ height: 500 }}
            >
                <EventListenerComponent />
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {planes.map(plane => (
                    <Marker position={[plane[6], plane[5]]} icon={planeIcon}>
                        <Popup>{plane[2]}</Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    )
}

export default Home;