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
    cents,
    url,
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
                <img src="/images/star.svg" width="100" class="star" />
                <div className="save">
                    <span>Save</span>
                    <br />
                    <span class="dollarSign">$</span>
                    <span class="amount">{save}</span>
                    {cents && <span class="cents">{cents}</span>}
                </div>
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
                <div className="priceContainer">
                    <span className="dollarSign">$</span>
                    <span className="amount">{price}</span>
                    <span className="currency">CAD</span>
                </div>
                <Link href={url} rel="noreferrer">
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
