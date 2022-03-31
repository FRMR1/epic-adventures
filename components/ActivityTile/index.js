import Image from "next/image";

const ActivityTile = ({ img, title, desc, url, location }) => {
  return (
    <div className="tile">
      <div className="img">
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
        <a href={url}>More Info</a>
      </div>
    </div>
  );
};

export default ActivityTile;
