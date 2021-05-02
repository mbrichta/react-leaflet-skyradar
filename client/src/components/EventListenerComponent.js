import { useContext, useEffect, useState } from 'react';
import { useMapEvents } from "react-leaflet";
import { Context } from '../context';
import axios from 'axios';

export const EventListenerComponent = () => {

    const { setPlanes } = useContext(Context)
    const [updateInterval, setUpdateInterval] = useState();

    useEffect(() => {
        getPlaneData();

        const i = setInterval(getPlaneData, 5000);
        setUpdateInterval(i)
    }, []);

    useEffect(() => {
        return () => clearInterval(updateInterval)
    }, [updateInterval]);

    const getPlaneData = async () => {
        const { _northEast, _southWest } = map.getBounds();
        const res = await axios.get(`http://localhost:5000/api/area/${_southWest.lat}/${_southWest.lng}/${_northEast.lat}/${_northEast.lng}`);
        setPlanes(res.data.states)
    }

    const map = useMapEvents({
        moveend: async () => {
            getPlaneData()
        },
    })

    return null;
}