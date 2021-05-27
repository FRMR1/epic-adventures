import GoogleMapReact from "google-map-react"
import Marker from "./Marker"

const GoogleMap = ({ location, zoom, negMargin }) => {
    // Destructure props
    const { lat, lng } = location

    // GoogleMaps API center object
    const center = { lat: lat, lng: lng }

    return (
        <div className={`${negMargin && "negMargin"}`}>
            <div className="map" style={{ height: "400px", width: "100%" }}>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
                    }}
                    defaultCenter={center}
                    defaultZoom={zoom}
                >
                    <Marker lat={lat} lng={lng} />
                </GoogleMapReact>
            </div>
        </div>
    )
}

export default GoogleMap
