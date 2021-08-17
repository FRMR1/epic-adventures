import { Stream } from "@cloudflare/stream-react"

const CloudflareVideo = ({ source }) => {
    return (
        <div>
            <Stream
                // controls
                muted={true}
                loop={true}
                autoplay={true}
                src={source}
            />
        </div>
    )
}

export default CloudflareVideo
