import Link from "next/link"
import Image from "next/image"

const Card = ({
    title,
    description,
    price,
    bullets,
    slug,
    imageUrl,
    comingSoon,
}) => {
    return (
        <div className="card">
            <div className="cardImage">
                <Image
                    src={`/images/${imageUrl}.jpg`}
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
                {price && (
                    <>
                        <h5>
                            <span>$</span>
                            {price}
                        </h5>
                        <Link href={`/summer/${slug}`}>
                            <div className="button">
                                <span>More Info</span>
                            </div>
                        </Link>
                    </>
                )}
                {comingSoon && <h5 className="comingSoon">Coming soon</h5>}
            </div>
        </div>
    )
}

export default Card
