import { HeroImageStyles } from "../styles/HeroImageStyles"
import HeroSlider, { Slide, Nav, OverlayContainer } from "hero-slider"
import { useEffect } from "react"
import styled from "styled-components"

const HeroImageContainer = styled.div`
    height: ${(props) => props.height};
    @media (min-width: 801px) {
        display: ${(props) => (!props.needsVideo ? "none" : "initial")};
    }
`

const HeroImageSlider = ({ title, images, needsVideo }) => {
    // Get window inner height
    let height = window.innerHeight

    return (
        // <div className={`${!needsVideo && "heroImage"}`}>
        <HeroImageContainer height={height} needsVideo={needsVideo}>
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
                            backgroundSize: `auto ${height}px`,
                        }}
                    />
                ))}
                <Nav />
            </HeroSlider>
        </HeroImageContainer>
        // </div>
    )
}

export default HeroImageSlider
