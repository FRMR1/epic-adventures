import styled from "styled-components"

export const TopDividerStyles = styled.div`
    padding: 0;
    margin: 0;
    position: relative;
    margin-top: ${({ home }) => (home ? "-17rem" : "-12rem")};
    z-index: 5;
    @media (max-width: 800px) {
        margin-top: -10rem;
    }
    @media (min-width: 1200px) {
        margin-top: ${({ home }) => (home ? "-25rem" : "-20rem")};
    }
    @media (min-width: 1500px) {
        margin-top: ${({ home }) => (home ? "-35rem" : "-30rem")};
    }
`
