import styled from "styled-components";

export const ActivityTilesStyles = styled.div`
  padding: 0 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    font-size: 6rem;
    line-height: 6rem;
    color: var(--mainColor);
    position: relative;
    margin: 10rem 0;
    text-align: center;
    @media (max-width: 800px) {
      font-size: 5rem;
      margin-bottom: 7rem;
      line-height: 4rem;
      text-align: center;
      position: relative;
    }
  }
  p {
    max-width: 70rem;
    margin: -5rem auto 6rem;
    font-size: 1.7rem;
    color: #a3a3a3;
    text-align: center;
    @media (max-width: 800px) {
      font-size: 1.5rem;
    }
  }
  .tiles {
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    gap: 40px;
    .tile {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      max-width: 300px;
      background-color: #f8f8f8;
      border-radius: 10px;
      box-shadow: 0 0 20px #00000020;
      min-height: 400px;
      flex: 1 0 350px;
      .img {
        width: 100%;
        position: relative;
        img {
          border-radius: 10px 10px 0 0;
          height: 200px;
          max-height: 200px !important;
        }
        .save {
          text-align: left;
          position: absolute;
          margin-bottom: -3rem;
          z-index: 10;
          display: flex;
          justify-content: center;
          align-items: center;
          right: 20px;
          text-align: center;
          line-height: 25px;
          transform: rotate(10deg);
          font-family: "Futura Bold";
          .amount {
            position: absolute;
            font-size: 2.5rem;
            color: #fff;
          }
          img {
            position: absolute;
            -webkit-filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.3));
            filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.3));
          }
        }
      }
      .desc {
        padding: 20px 20px 40px;
        span {
          text-transform: uppercase;
          font-size: 10px;
          margin: 0;
          color: #a2a2a2;
        }
        h4 {
          color: var(--mainColor);
          font-size: 25px;
          line-height: 25px;
          letter-spacing: 0px;
          margin: 0;
          height: 50px;
        }
        p {
          color: #9b9b9b;
          margin: 1rem 0 4rem;
          font-size: 12px;
          line-height: 18px;
          height: 60px;
          text-align: left;
        }
        a {
          background-color: var(--secColor);
          color: #fff;
          padding: 1.2rem 2rem;
          justify-self: end;
          align-self: center;
          font-size: 12px;
          text-align: center;
          border-radius: 3px;
          box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
          font-family: Roboto Mono;
          font-weight: 300;
          text-transform: uppercase;
          cursor: pointer;
          &:hover {
            text-decoration: none;
          }
        }
      }
    }
    .hidden-flex-item {
      content: "";
      flex: 1 0 300px;
      padding: 5px;
      margin-top: 10px;
      margin-right: 5px;
      visibility: hidden;
      max-width: 300px;
    }
  }
  .button {
    text-align: center;
    cursor: pointer;
    position: relative;
    background-color: var(--secColor);
    border-radius: 3px;
    width: 12rem;
    padding: 1rem;
    span {
      color: #fff;
      font-weight: 400;
      text-transform: uppercase;
      font-size: 1.3rem;
    }
  }
  .viewAll {
    margin: 5rem auto 0;
    display: flex;
    justify-content: center;
  }
  .marginBottom {
    margin-bottom: 20rem;
  }
`;
