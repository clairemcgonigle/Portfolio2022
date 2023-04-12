import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import {Typography} from "@mui/material";


function Map() {
    const mapStyles = {
        width: 500,
        height: 500,
    };

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });

    if (!isLoaded) return ( <Typography>Loading...</Typography>) ;
    return (
        <GoogleMap
            zoom={4}
            center={{lat: 35, lng: -8}}
            mapContainerStyle={mapStyles}>
            <Marker position={{lat: 28.2, lng: -16.6}}/>
            <Marker position={{lat: 27.9, lng: -15.5}}/>
            <Marker position={{lat: 28.1, lng: -17.2}}/>
            <Marker position={{lat: 37.4, lng: -6.0}}/>
            <Marker position={{lat: 39.45, lng: -0.4}}/>
            <Marker position={{lat: 40.42, lng: -3.68}}/>
            <Marker position={{lat: 40.48, lng: -3.36}}/>
            <Marker position={{lat: 42.87, lng: -8.54}}/>
            <Marker position={{lat: 42.81, lng: -1.64}}/>
            <Marker position={{lat: 41.38, lng: 2.17}}/>
            <Marker position={{lat: 39.57, lng: 2.64}}/>
        </GoogleMap>
    )
}

export default Map