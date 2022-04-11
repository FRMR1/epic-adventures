import styled from "styled-components";

export const AdventureSectionStyles = styled.div`
  background-color: ${({ grey }) => (grey ? "#f3f3f3" : "#fafafa")};
  padding: 5rem 3rem 5rem;
  margin: 0;
  margin-bottom: -12rem;
  text-align: center;
  position: relative;
  /* z-index: -1; */
  /* top: -18rem; */
  margin-top: -14rem;
  @media (max-width: 800px) {
    /* margin-top: -22rem; */
  }
  h3 {
    margin: 0;
    font-size: 5rem;
    color: var(--mainColor);
    letter-spacing: -0.1rem;
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
    color: #a3a3a3;
    @media (max-width: 800px) {
      font-size: 1.5rem;
    }
  }
  .driveBC {
    display: inline;
  }
  .twoCol {
    margin-top: 7rem;
    @media (max-width: 800px) {
      margin-top: 0;
    }
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 3rem;
    @media (max-width: 800px) {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column-reverse;
    }
    h3 {
      font-size: 4rem;
      text-align: left;
      line-height: 4rem;
      margin-bottom: 5rem;
    }
    ul {
      list-style: none;
      text-align: left;
      padding-left: 0;
      li {
        font-size: 1.5rem;
        color: #a3a3a3;
        margin-bottom: 2rem;
        display: grid;
        grid-template-columns: 25px auto;
        line-height: 4rem;
        img {
          margin-right: 1.6rem;
          position: relative;
          top: 1.3rem;
        }
      }
    }
    .left,
    .right {
      align-self: center;
    }
    .left {
      padding: 0 7rem;
      @media (max-width: 800px) {
        padding: 0;
      }
    }
    .right {
      padding: 0 7rem;
      @media (max-width: 800px) {
        padding: 0;
        margin: 0 0 100px;
        width: 100%;
      }
      h3 {
        color: #6a6a6a;
      }
      .imageRotate {
        transform: rotate(5deg);
      }
    }
  }
  .whyEpic {
    margin-top: 18rem;
    @media (max-width: 800px) {
      margin-top: 0;
    }
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
`;
