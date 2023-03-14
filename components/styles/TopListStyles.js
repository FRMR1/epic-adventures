import styled from "styled-components";

export const TopListStyles = styled.div`
  position: relative;
  padding: 15rem 3rem 25rem;
  margin-bottom: -18rem;
  @media (max-width: 800px) {
    display: flex;
    flex-wrap: wrap;
    padding-top: 17rem;
  }
  h3 {
    margin: 0;
    margin-top: 5rem;
    font-size: 4rem;
    color: #555;
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
    margin-bottom: 10rem;
    margin: 1rem auto;
    font-size: 1.7rem;
    color: #b2b2b2;
    @media (max-width: 800px) {
      font-size: 1.5rem;
    }
  }
  ul {
    text-align: center;
    padding: 0;

    li {
      max-width: 70rem;
      margin-bottom: 10rem;
      margin: 1rem auto;
      font-size: 2rem;
      color: #b2b2b2;
      list-style: none;
      pointer-events: auto;

      @media (max-width: 800px) {
        font-size: 1.5rem;
      }
    }
  }

  .list {
    ul li {
      list-style: number;
      margin-bottom: 4rem;
    }
  }
`;
