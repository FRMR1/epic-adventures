import styled from "styled-components";

export const AboutSectionStyles = styled.div`
  background-color: ${({ grey }) => (grey ? "#f3f3f3" : "#fafafa")};
  position: relative;
  z-index: -1;
  margin-top: 0;
  padding: 8rem 3rem 0;
  margin-bottom: ${({ bottom }) => (bottom ? "-50rem" : "0")};
  padding-bottom: ${({ bottom }) => (bottom ? "50rem" : "0")};
  @media (max-width: 800px) {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    padding-top: 17rem;
  }
  h3 {
    margin: 0;
    font-size: 5rem;
    margin-top: 10rem;
    color: var(--mainColor);
    letter-spacing: -0.1rem;
    text-align: center;
    @media (max-width: 800px) {
      font-size: 3.5rem;
      margin-bottom: 5rem;
      line-height: 4rem;
      text-align: center;
    }
  }
  p {
    max-width: 70rem;
    margin: 1rem auto;
    font-size: 1.7rem;
    color: #b2b2b2;
    @media (max-width: 800px) {
      font-size: 1.5rem;
    }
  }
  .bold {
    font-weight: 600;
  }
  .small {
    font-size: 1.5rem;
  }
  .big {
    font-size: 2rem;
    text-align: center;
  }
  .twoCol {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 800px) {
      display: flex;
      flex-wrap: wrap;
      text-align: center;
      flex-direction: column-reverse;
    }
    h3 {
      font-size: 4rem;
      text-align: left;
      @media (max-width: 800px) {
        text-align: center;
      }
    }
    ul {
      list-style: none;
      text-align: left;
      padding-left: 0;
      li {
        font-size: 1.5rem;
        color: #7b7b7b;
        margin-bottom: 2rem;
        display: grid;
        grid-template-columns: auto auto;
        line-height: 3.3rem;
        img {
          margin-right: 1.6rem;
          position: relative;
          top: 1rem;
        }
      }
    }
    .left {
      padding: 0 7rem;
    }
    .right {
      padding: 0 7rem;
      @media (max-width: 800px) {
        width: 100%;
      }
      h3 {
        color: #6a6a6a;
      }
    }
    .imageRotate {
      transform: rotate(5deg);
      /* img {
                filter: drop-shadow(30px 10px 4px #4444dd);
            } */
    }

    .left,
    .right {
      align-self: center;
      @media (max-width: 800px) {
        padding: 0;
      }
    }
  }
  .whyEpic {
    margin-top: 18rem;
    margin-bottom: 15rem;
    h3 {
      margin-bottom: 3rem;
    }
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      max-width: 80rem;
      margin: 0 auto;
      column-gap: 2rem;
      row-gap: 4rem;
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
  }
  .logos {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .grid {
      margin-top: 50px;
      max-width: 1000px;
      display: flex;
      flex-wrap: wrap;
      gap: 40px;
      justify-content: center;
      align-items: center;
      img {
        width: 200px;
      }
    }
  }
`;
