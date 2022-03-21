import styled from "styled-components";

export const AdventureHeadingStyles = styled.div`
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
  }
  .imageContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 8rem;
    width: 50%;
    img {
      max-width: 500px;
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
    line-height: 6rem;
    color: var(--secColor);
    position: relative;
    margin: 0 0 2rem;
    @media (max-width: 800px) {
      font-size: 5rem;
      margin-bottom: 7rem;
      line-height: 4rem;
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
`;
