import { useContext, useEffect } from 'react';
import { useMapEvents } from "react-leaflet";
import { Context } from '../context';
import axios from 'axios';

export const EventListenerComponent = () => {

    const { setPlanes } = useContext(Context)

    useEffect(() => {
        const getInitialData = async () => {
            const { _northEast, _southWest } = map.getBounds();
            const res = await axios.get(`http://localhost:5000/api/area/${_southWest.lat}/${_southWest.lng}/${_northEast.lat}/${_northEast.lng}`);
            setPlanes(res.data.states)
        }

        getInitialData();
    }, [])

    const map = useMapEvents({
        moveend: async () => {

            const { _northEast, _southWest } = map.getBounds();
            const res = await axios.get(`http://localhost:5000/api/area/${_southWest.lat}/${_southWest.lng}/${_northEast.lat}/${_northEast.lng}`);
            setPlanes(res.data.states)
        }
    })

    return null;
}