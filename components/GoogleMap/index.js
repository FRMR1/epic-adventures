import GoogleMapReact from "google-map-react"
import Marker from "./Marker"

const GoogleMap = ({ location, zoom }) => {
    // Destructure props
    const { lat, lng } = location

    // GoogleMaps API center object
    const center = { lat: lat, lng: lng }

    return (
        <div className="map" style={{ height: "400px", width: "100%" }}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: "AIzaSyBa3x7LRSVxUF_i3doAGlWdhwroHlYB9DQ",
                }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                <Marker lat={lat} lng={lng} />
            </GoogleMapReact>
        </div>
    )
}

export default GoogleMap
