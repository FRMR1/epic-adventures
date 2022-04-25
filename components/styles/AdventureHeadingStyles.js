import styled from "styled-components";

export const AdventureHeadingStyles = styled.div`
  .oneCol {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    text-align: center;
    margin: 5rem 0;
  }
  background-color: var(--mainColor);
  position: relative;
  margin-bottom: -5rem;
  margin-top: -2rem;
  padding: 10rem 5rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  z-index: 3;
  width: 100%;
  display: flex;
  @media (max-width: 800px) {
    display: block;
    margin-top: -1rem;
    padding: 1rem;
    padding-top: 10rem;
    padding-bottom: 10rem;
  }
  .imageContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 0 8rem; */
    width: 50%;
    img {
      max-width: 350px;
      @media (max-width: 800px) {
        max-width: 300px;
      }
    }
    @media (max-width: 800px) {
      width: 100%;
      padding: 2rem 10%;
    }
  }
  .pContainer {
    align-self: center;
    justify-content: center;
    padding: 3rem;
    width: 50%;
    div {
      margin: 0 0 5rem;
    }
    @media (max-width: 800px) {
      position: relative;
      width: 100%;
      /* top: -5rem; */
      /* margin-bottom: -10rem; */
    }
  }
  h2 {
    font-size: 6rem;
    line-height: 6.5rem;
    color: var(--secColor);
    position: relative;
    margin: 0 0 2rem;
    @media (max-width: 800px) {
      font-size: 5rem;
      margin-bottom: 7rem;
      line-height: 4.5rem;
      text-align: center;
      position: relative;
      /* top: -15rem; */
    }
  }
  p {
    margin: 0 auto;
    font-size: 1.4rem;
    max-width: 20%;
    color: #afafaf;
    max-width: 70rem;
    /* margin-bottom: 10rem; */
    @media (max-width: 800px) {
      font-size: 1.5rem;
      text-align: center;
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
      font-family: --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      font-weight: 300;
      letter-spacing: 0.05rem;
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
`;
