import { DefaultPlayer as Video } from "react-html5video"

const YoutubeEmbed = () => {
    return (
        <Video
            autoPlay
            loop
            muted
            controls={[]}
            // poster="http://sourceposter.jpg"
            // onCanPlayThrough={() => {
            // Do stuff
            // }}
        >
            <source src="/video/video.mp4" type="video/mp4" />
        </Video>
    )
}

export default YoutubeEmbed
