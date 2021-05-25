import Image from "next/image"
import Link from "next/link"

const Adventure = ({ number, title, reverse, description, image, slug }) => {
    return (
        <div className={`${"adventureSection"} ${reverse && "reverse"}`}>
            <div className="adventuresImage">
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
                {/* <ul>
                    {bullets.map((bullet) => (
                        <li>
                            <img src="/svg/checkmark.svg" width="15" />
                            {bullet}
                        </li>
                    ))}
                </ul> */}
                <Link href={`/summer/${slug}`}>
                    <div className="button">
                        <span>More Info</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Adventure
