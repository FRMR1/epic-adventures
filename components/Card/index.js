import Link from "next/link"

const Card = ({ title, description, price, bullets, image, slug }) => {
    return (
        <div className="card">
            <h4>{title}</h4>
            <p>{description}</p>
            <ul>
                {bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
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
    )
}

export default Card
