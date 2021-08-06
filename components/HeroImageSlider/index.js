import { HeroImageStyles } from "../styles/HeroImageStyles"
import HeroSlider, { Slide, Nav, OverlayContainer } from "hero-slider"

export const HeroImageSlider = ({ title, images, needsVideo }) => {
    // Get window inner height
    let height
    if (typeof window !== "undefined") {
        height = window.innerHeight
    }

    console.log(height)

    return (
        <div className={`webkitFill ${!needsVideo && "heroImage"}`}>
            <HeroSlider
                slidingAnimation="left_to_right"
                orientation="horizontal"
                initialSlide={1}
                style={{
                    color: "#FFF",
                }}
                settings={{
                    slidingDuration: 250,
                    slidingDelay: 100,
                    shouldAutoplay: true,
                    shouldDisplayButtons: false,
                    autoplayDuration: 3000,
                    height: `${height}px`,
                    // height: "400px",
                }}
            >
                <OverlayContainer
                    style={{
                        display: "flex",
                        flexFlow: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        height: "100%",
                        textAlign: "center",
                    }}
                >
                    <h2 className="mobileHeading">{title}.</h2>
                </OverlayContainer>
                {images.map((image) => (
                    <Slide
                        background={{
                            backgroundImage: `/images/hero/${image}.jpg`,
                            backgroundAttachment: "fixed",
                            backgroundPosition: "center center",
                            backgroundSize: "cover",
                        }}
                    />
                ))}
                <Nav />
            </HeroSlider>
        </div>
    )
}
