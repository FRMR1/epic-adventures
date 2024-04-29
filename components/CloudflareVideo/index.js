import { Stream } from "@cloudflare/stream-react";

const CloudflareVideo = ({ source, sound, controls }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        backgroundColor: "white",
      }}
    >
      <Stream
        controls={controls}
        muted={sound ? false : true}
        loop={true}
        autoplay={true}
        src={source}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          backgroundColor: "white",
        }}
      />
    </div>
  );
};

export default CloudflareVideo;
