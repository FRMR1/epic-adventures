import { HeroImageStyles } from "../styles/HeroImageStyles";
import HeroSlider, { Slide, Nav, OverlayContainer } from "hero-slider";
import { useEffect, useLayoutEffect, useState } from "react";
import styled from "styled-components";

const HeroImageContainer = styled.div`
  height: ${(props) => props.height};
  @media (min-width: 801px) {
    display: ${(props) => (!props.needsVideo ? "none" : "initial")};
  }
`;

const HeroImageSlider = ({ title, images, needsVideo, cdn }) => {
  // Get window inner height
  const [height, setHeight] = useState();

  useLayoutEffect(() => {
    setHeight(window.innerHeight);
  }, []);

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
          {images.length == 1 && (
            <div
              style={{
                backgroundImage: `url(${images[0]})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                width: "100%",
                height: "100%",
                position: "absolute",
              }}
            />
          )}
          <h2 className="mobileHeading" style={{ zIndex: "9" }}>
            {title}.
          </h2>
        </OverlayContainer>
        {images.length > 1 &&
          images.map((image) => (
            <Slide
              background={{
                backgroundImage: cdn ? image : `/images/hero/${image}.jpg`,
                backgroundPosition: "center top",
                backgroundSize: "cover",
              }}
            />
          ))}
        <Nav />
      </HeroSlider>
    </HeroImageContainer>
    // </div>
  );
};

export default HeroImageSlider;
