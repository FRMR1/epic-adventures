import styled from "styled-components";

export const BookAdventureStyles = styled.div`
  background-color: ${({ grey }) => (grey ? "#f3f3f3" : "#fafafa")};
  margin: 0;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? "20rem" : "-3rem")};
  position: relative;
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
      }
    }
    .right {
      padding: 0 4rem;
      @media (max-width: 800px) {
        padding: 0;
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
      /* top: -2rem; */
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
  .combo {
    p {
      text-align: center;
      font-size: 2rem;
    }
    .button {
      text-align: center;
      cursor: pointer;
      position: relative;
      /* top: -2rem; */
      background-color: var(--secColor);
      border-radius: 3px;
      width: 12rem;
      padding: 1rem;
      margin: 3rem auto 0;
      span,
      a {
        color: #fff;
        font-weight: 400;
        text-transform: uppercase;
        font-size: 1.3rem;
        font-family: Roboto Mono;
      }
    }
    ul {
      list-style: none;
      text-align: left;
      padding-left: 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      li {
        font-size: 1.2rem;
        color: #707070;
        margin-bottom: 1.5rem;
        margin-right: 2rem;
        line-height: 1rem;
        font-size: 1.6rem;
        &:last-child {
          margin-right: 0;
        }
        img {
          margin-right: 1.2rem;
          position: relative;
          top: 0.3rem;
        }
      }
    }
  }
  .paragraph {
    margin: 15rem 0;
    p {
      font-size: 20px;
      text-align: center;
    }
  }
  .summerCombos {
    position: relative;
    .custom-shape-divider-top-1622058599 {
      top: initial;
      z-index: 0;
    }
    .twoCol {
      margin-top: 1rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-bottom: 8rem;
      background-color: #f0f0f0;
      padding: 3rem;
      min-height: 300px;
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
        padding: 3rem;
        @media (max-width: 800px) {
          padding: 0;
          width: 100%;
        }
      }
      .right {
        padding: 10rem 4rem;
        @media (max-width: 800px) {
          padding: 0;
          p,
          li {
            text-align: center;
          }
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
      a:hover {
        text-decoration: none;
      }
      .button {
        text-align: center;
        cursor: pointer;
        position: relative;
        /* top: -2rem; */
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
  }
  .whyEpic {
    margin-top: -5rem;
    margin-bottom: 27rem;
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
`;
