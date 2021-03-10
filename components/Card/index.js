import Link from "next/link"
import Image from "next/image"

const Card = ({ title, description, price, bullets, slug }) => {
    return (
        <div className="card">
            <div className="cardImage">
                <Image
                    src={`/images/${slug}.jpg`}
                    layout="responsive"
                    width="100%"
                    height="auto"
                    objectFit="cover"
                    alt={title}
                />
            </div>
            <div className="cardDesc">
                <h4>{title}</h4>
                <p>{description}</p>
                <ul>
                    {bullets.map((bullet) => (
                        <li key={bullet}>
                            <img src="/svg/checkmark.svg" width="15" />
                            {bullet}
                        </li>
                    ))}
                </ul>
                <h5>
                    <span>$</span>
                    {price}
                </h5>
                <Link href={`/adventures/${slug}`}>
                    <div className="button">
                        <span>More Info</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Card
