import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { GoogleMapContainerStyle, GoogleMap_Props } from "../config/DataTypesInterface.config";

const ReactGoogleMap = ({ lat, lng }: GoogleMap_Props): JSX.Element => {
    const mapContainerStyle: GoogleMapContainerStyle = {
        height: "100%",
        width: "100%",
        aspectRatio: 1,
    };

    const center = {
        lat: lat,
        lng: lng,
    }

    const markerPosition = {
        lat: lat,
        lng: lng,
    };

    return (
        <>
            <LoadScript
                googleMapsApiKey="aeufiugsafytatrytfayt"
                loadingElement={<div style={{ height: "100%" }} />}
                onLoad={() => console.log("Google Maps API loaded successfully!!")}
            >
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    zoom={5}
                >
                    <Marker position={markerPosition} />
                </GoogleMap>
            </LoadScript>
        </>
    )
}

export default ReactGoogleMap;