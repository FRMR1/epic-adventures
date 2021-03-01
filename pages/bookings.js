import Iframe from "react-iframe"

const Bookings = () => {
    return (
        <Iframe
            url={
                "https://epicadventuregroup.rezdy.com/catalog/427160/tours?iframe=true"
            }
            width="450px"
            height="450px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
        />
    )
}

export default Bookings
