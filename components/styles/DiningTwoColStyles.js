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
    padding: 15rem 0;
    background: #f3f3f3;
    display: flex;
    min-height: 500px;
    justify-content: space-around;
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      h3 {
        color: var(--mainColor);
        font-size: 44px;
        z-index: 99;
        margin: 20px 0;
        line-height: 50px;
      }
      p {
        color: #797979;
        margin-bottom: 30px;
      }
      a {
        text-align: center;
        cursor: pointer;
        background-color: var(--secColor);
        border-radius: 3px;
        width: 12rem;
        padding: 1rem;
        color: #fff;
        font-weight: 400;
        text-transform: uppercase;
        font-size: 1.3rem;
        font-family: Roboto Mono;
        &:hover {
          text-decoration: none;
        }
      }
    }
  }
`;
