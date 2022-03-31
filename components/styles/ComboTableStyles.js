import styled from "styled-components";

export const ComboTableStyles = styled.div`
  padding: 5rem 3rem 5rem;
  margin: 0;
  margin-bottom: -12rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  @media (max-width: 800px) {
    margin-top: -22rem;
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
  .tableContainer {
    width: 100%;
    max-width: 1000px;
    position: relative;
    box-shadow: 0 0 10px #00000022;
    margin-top: 7rem;
    border-radius: 10px;
  }
  .table {
    overflow-x: scroll;
  }
  table {
    border-spacing: 0;
    font-size: 12px;
    font-family: --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 300;
    letter-spacing: 0.05rem;
    margin-left: 140px;
    .cell {
      min-height: 40px;
      height: 40px;
      display: flex;
      align-items: center;
    }
    thead th .cell,
    td .cell {
      justify-content: center;
    }
    th .cell {
      justify-content: flex-end;
    }
    thead {
      th:first-child {
        border-bottom: 1px solid #dedede !important;
      }
    }
    td:nth-child(even) {
      background-color: #f7f7f7;
    }
    tr:first-child {
      th {
        &:last-child {
          border-radius: 0 10px 0 0;
        }
      }
    }
    tr:last-child {
      th:first-child {
        border-bottom: none;
      }
    }
    td,
    th {
      border-right: 1px solid #dedede;
      border-bottom: 1px solid #dedede;
      min-width: 140px;
      max-width: 140px;
      padding: 5px;
      line-height: 13px;
      text-align: right;
      &:last-child {
        border-right: none;
      }
    }
    th {
      background-color: #efefef;
    }
    td {
      text-align: center;
    }
    td:first-child {
      background-color: #efefef;
      /* width: 200px; */
      text-align: right;
      padding-right: 5px;
    }
    tr:last-child td {
      border-bottom: none;
    }
    .combo {
      position: absolute;
      left: 0;
    }
  }
`;
