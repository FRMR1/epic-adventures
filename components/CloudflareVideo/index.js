import { Stream } from "@cloudflare/stream-react";

const CloudflareVideo = ({ source, sound, controls }) => {
  return (
    <div>
      <Stream
        controls={controls}
        muted={sound ? false : true}
        loop={true}
        autoplay={true}
        src={source}
      />
    </div>
  );
};

export default CloudflareVideo;
