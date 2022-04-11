import styled from "styled-components";

export const WhyEpicStyles = styled.div`
  background-color: ${({ grey }) => (grey ? "#f3f3f3" : "#fafafa")};
  margin: 0;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? "20rem" : "-3rem")};
  position: relative;
  padding: 0 3rem;
  h3 {
    margin: 5rem 0 0;
    font-size: 5rem;
    color: var(--mainColor);
    letter-spacing: -0.1rem;
    text-align: center;
    padding-top: ${({ paddingTop }) => (paddingTop ? "15rem" : "0")};
    z-index: 3;
    position: relative;
    @media (max-width: 800px) {
      font-size: 3.5rem;
      margin-bottom: 5rem;
      line-height: 4rem;
    }
  }
  p {
    max-width: 70rem;
    text-align: left;
    margin: 1rem auto 3rem;
    font-size: 1.4rem;
    color: #b2b2b2;
    @media (max-width: 800px) {
      font-size: 1.5rem;
    }
  }
  .whyEpic {
    margin-top: -5rem;
    margin-bottom: 27rem;
    h3 {
      margin-bottom: 5rem;
    }
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      max-width: 80rem;
      margin: 0 auto;
      column-gap: 2rem;
      row-gap: 4rem;
      @media (max-width: 800px) {
        grid-template-columns: 1fr;
        text-align: center;
    }
      .item {
        display: grid;
        grid-template-columns: 20px 1fr;
        column-gap: 2rem;
      }
      .icon {
        justify-self: start;
      }
      .desc {
        h4 {
          text-align: left;
          color: #505050;
          margin: 0;
          font-size: 3rem;
          line-height: 3rem;
        }
        p {
          text-align: left;
          font-size: 1.5rem;
          line-height: 3rem;
        }
      }
    }
`;
