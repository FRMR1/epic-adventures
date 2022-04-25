import styled from "styled-components";

export const SectionStyles = styled.div`
  background-color: var(--mainColor);
  position: relative;
  margin: 0;
  margin-top: -2rem;
  padding: 5rem 0;
  z-index: 5;
  @media (max-width: 800px) {
    margin-top: -1rem;
  }
  h3 {
    margin: 0;
    font-size: 5rem;
    color: var(--secColor);
    letter-spacing: -0.1rem;
    text-align: center;
    @media (max-width: 800px) {
      font-size: 3.5rem;
      margin-bottom: 5rem;
      line-height: 4rem;
    }
  }
  p {
    max-width: 70rem;
    margin: 1rem auto;
    font-size: 1.7rem;
    color: var(--lightGrey);
    text-align: center;
    @media (max-width: 800px) {
      font-size: 1.5rem;
    }
  }
  .mapCarousel {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    overflow: visible;
    img {
      width: 100%;
      max-width: 1000px;
    }
  }

  .tooltip {
    .tooltipText {
      visibility: hidden;
      width: 120px;
      background-color: #202020cc;
      color: #fff;
      text-align: center;
      padding: 5px;
      border-radius: 6px;
      bottom: 100%;
      left: 50%;
      margin-left: -60px;
      line-height: 20px;

      position: absolute;
      z-index: 1;
    }
  }

  .tooltip:hover .tooltipText {
    visibility: visible;
  }

  .tooltip .tooltipText::after {
    content: " ";
    position: absolute;
    top: 100%; /* At the bottom of the tooltip */
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #202020cc transparent transparent transparent;
  }

  .locationLogos {
    margin: 0 auto;
    text-align: center;
    /* grid-template-columns: auto auto;
        max-width: 350px;
        display: grid;
        gap: 3rem; */
    margin-bottom: 4rem;
    /* justify-items: center; */
  }

  .react-multi-carousel-list {
    overflow: visible !important;
  }
`;
