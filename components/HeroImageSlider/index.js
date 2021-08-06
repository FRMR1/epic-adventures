import { HeroImageStyles } from "../styles/HeroImageStyles"
import HeroSlider, { Slide, Nav, OverlayContainer } from "hero-slider"

export const HeroImageSlider = ({ title, images, needsVideo }) => {
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
                    height: "100vh",
                }}
            >
                <OverlayContainer
                    style={{
                        display: "flex",
                        flexFlow: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        height: "100vh",
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
                        }}
                    />
                ))}
                <Nav />
            </HeroSlider>
        </div>
    )
}
