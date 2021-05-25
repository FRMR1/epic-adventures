import Image from "next/image"
import Link from "next/link"

const Combo = ({
    number,
    title,
    reverse,
    save,
    description,
    image,
    price,
    bullets,
}) => {
    return (
        <div className={`${"comboSection"} ${reverse && "reverse"}`}>
            <div className="comboImage">
                <Image
                    src={image}
                    layout="responsive"
                    width="100%"
                    height="auto"
                    objectFit="contain"
                    alt={title}
                />
            </div>
            <div>
                <span className="number">{number}</span>
                <h4>{title}</h4>
                <p>{description}</p>
                <ul>
                    {bullets.map((bullet) => (
                        <li>
                            <img src="/svg/checkmark.svg" width="15" />
                            {bullet}
                        </li>
                    ))}
                </ul>
                <Link
                    href="https://epicadventuregroup.rezdy.com/"
                    rel="noreferrer"
                >
                    <a target="_blank" rel="noreferrer">
                        <div className="button">
                            <span>Book Now</span>
                        </div>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Combo
