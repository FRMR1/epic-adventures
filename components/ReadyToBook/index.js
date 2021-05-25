import { ReadyToBookStyles } from "../styles/ReadyToBookStyles"

const ReadyToBook = () => {
    return (
        <ReadyToBookStyles>
            <div>
                <h4>Ready to book?</h4>
                <p>Book your next adventure now!</p>
            </div>
            <a
                href="https://epicadventuregroup.rezdy.com/"
                target="_blank"
                rel="noreferrer"
                className="bookNow"
            >
                Book Now
            </a>
        </ReadyToBookStyles>
    )
}

export default ReadyToBook
