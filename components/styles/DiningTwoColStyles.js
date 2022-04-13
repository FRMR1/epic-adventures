import styled from "styled-components";

export const DiningTwoColStyles = styled.div`
  margin: 15rem 0 12rem;
  position: relative;
  .custom-shape-divider-top-1622058599 {
    top: initial;
    z-index: 0;
  }
  .custom-shape-divider-bottom-1622061969 {
  }
  .twoCol {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 8rem;
    background-color: #f0f0f0;
    padding: 3rem;
    min-height: 400px;
    * {
      z-index: 1;
    }
    @media (max-width: 800px) {
      display: flex;
      flex-wrap: wrap;
    }
    h3 {
      font-size: 4rem;
      text-align: left;
    }
    ul {
      list-style: none;
      text-align: left;
      padding-left: 0;
      display: flex;
      flex-wrap: wrap;
      li {
        font-size: 1.2rem;
        color: #707070;
        margin-bottom: 1.5rem;
        margin-right: 2rem;
        line-height: 1rem;
        width: 220px;
        img {
          margin-right: 1.2rem;
          position: relative;
          top: 0.3rem;
        }
      }
    }
    .left,
    .right {
      align-self: center;
      position: relative;
    }
    .left {
      height: 100%;
      width: 100%;
      @media (max-width: 800px) {
        padding: 0;
        width: 100%;
        min-height: 400px;
      }
    }
    .right {
      padding: 0 4rem;
      @media (max-width: 800px) {
        padding: 0;
        ul {
          justify-content: center;
        }
        p,
        li {
          text-align: center;
        }
      }
      h4 {
        color: var(--mainColor);
        font-size: 30px;
        margin-bottom: 20px;
      }
      .large {
        font-size: 20px;
        line-height: 30px;
        color: #797979;
      }
      h3 {
        color: #6a6a6a;
      }
    }
    .priceContainer {
      text-align: left;
      position: relative;
      padding: 0;
      margin: 0;
      @media (max-width: 800px) {
        text-align: center;
      }
      span {
        font-family: --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        color: #5c5c5c;
        font-weight: 600;
        display: inline;
        padding: 0;
        margin: 0;
        line-height: 10rem;
      }
      .dollarSign {
        font-size: 4rem;
        position: relative;
        top: -3.7rem;
      }
      .amount {
        font-size: 10rem;
        letter-spacing: -0.3rem;
      }
      .currency {
        font-size: 1.5rem;
        position: relative;
        top: -5.5rem;
      }
    }
    a:hover {
      text-decoration: none;
    }
    .button {
      text-align: center;
      cursor: pointer;
      position: relative;
      background-color: var(--secColor);
      border-radius: 3px;
      width: 12rem;
      padding: 1rem;
      @media (max-width: 800px) {
        margin: 0 auto;
      }
      span,
      a {
        color: #fff;
        font-weight: 400;
        text-transform: uppercase;
        font-size: 1.3rem;
        font-family: Roboto Mono;
      }
    }
  }
`;
