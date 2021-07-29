import { DefaultPlayer as Video } from "react-html5video"

const YoutubeEmbed = ({ source }) => {
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
            <source src={source} type="video/mp4" />
        </Video>
    )
}

export default YoutubeEmbed
