import Image from "next/image"
import Link from "next/link"
import Divider from "../../components/Divider"
import Divider2 from "../../components/Divider2"

const Adventure = ({ number, title, reverse, description, image, slug }) => {
    return (
        <div className={`${"adventureSection"} ${reverse && "grey"}`}>
            <div>{reverse && <Divider2 />}</div>

            <div
                className={`${"adventureSectionInner"} ${reverse && "reverse"}`}
            >
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
                    <Link href={`/summer/${slug}`}>
                        <div className="button">
                            <span>More Info</span>
                        </div>
                    </Link>
                </div>
            </div>
            <div>{reverse && <Divider />}</div>
        </div>
    )
}

export default Adventure
