import Image from "next/image";
import { useState } from "react";

const ActivityTile = ({
  img,
  title,
  desc,
  url,
  location,
  save,
  code,
  price,
  rrsp,
}) => {
  const [copied, setCopied] = useState(false);

  return (
    <div className="tile">
      <div className="img">
        {save && (
          <div className="save">
            <div className="save">
              <img src="/images/star.svg" width="100" class="star" />
              <span class="amount">SAVE {save}%</span>
            </div>
          </div>
        )}
        {rrsp && (
          <div className="save">
            <div className="save">
              <img src="/images/star.svg" width="100" class="star" />
              <span class="amount">${rrsp}</span>
              <span className="strikeout strikeLeft"></span>
              <span className="strikeout strikeRight"></span>
            </div>
          </div>
        )}
        <Image
          src={`https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/${img}/public`}
          layout="responsive"
          width="100%"
          height="auto"
          objectFit="cover"
          alt={title}
        />
      </div>
      <div className="desc">
        <span>{location}</span>
        <h4>{title}</h4>
        <p>{desc}</p>
        {price && (
          <div className="priceContainer">
            <span className="dollarSign">$</span>
            <span className="amount">{price}</span>
            <span className="currency">CAD</span>
          </div>
        )}
        {url && <a href={url}>More Info</a>}
        {code && (
          <button
            onClick={() => {
              if (navigator) {
                if (navigator.clipboard) {
                  navigator.clipboard.writeText(code);
                  setCopied(true);
                }
              }
            }}
          >
            {copied ? "Copied!" : "Click to copy"}
          </button>
        )}
      </div>
    </div>
  );
};

export default ActivityTile;
