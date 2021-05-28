import Image from "next/image"
import Link from "next/link"
import Divider from "../../components/Divider"
import Divider2 from "../../components/Divider2"

const Combo = ({
    number,
    title,
    reverse,
    save,
    description,
    image,
    price,
    bullets,
    url,
    cents,
}) => {
    return (
        <div className={`${"comboSection"} ${reverse && "grey"}`}>
            <div>{reverse && <Divider2 />}</div>
            <div className={`${"comboSectionInner"} ${reverse && "reverse"}`}>
                <div className="comboImage">
                    <Image
                        src={image}
                        layout="responsive"
                        width="100%"
                        height="auto"
                        objectFit="contain"
                        alt={title}
                    />
                    <div className="priceStrikeout">
                        <img src="/images/star.svg" width="100" class="star" />
                        <div className="save">
                            <span class="dollarSign">$</span>
                            <span class="amount">{save}</span>
                            {cents && <span class="cents">{cents}</span>}
                            <span className="strikeout strikeLeft"></span>
                            <span className="strikeout strikeRight"></span>
                        </div>
                    </div>
                </div>
                <div className="comboDesc">
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
            <div>{reverse && <Divider />}</div>
        </div>
    )
}

export default Combo
