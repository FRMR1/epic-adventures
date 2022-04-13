import Link from "next/link";
import Image from "next/image";

const SuggestedCombo = ({
  title,
  description,
  price,
  bullets,
  url,
  image,
  internal,
}) => {
  return (
    <div className="card">
      <div className="cardImage">
        <Image
          src={`https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/${image}/public`}
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
          {bullets?.map((bullet) => (
            <li key={bullet}>
              <img src="/svg/checkmark.svg" width="15" />
              {bullet}
            </li>
          ))}
        </ul>
        {price && (
          <h5>
            <span>$</span>
            {price}
          </h5>
        )}
        <a
          href={url}
          target={internal ? "_self" : "_blank"}
          rel="noreferrer"
          className="bookNow"
        >
          <div className="button">
            <span>{internal ? "More Info" : "Book Now"}</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default SuggestedCombo;
