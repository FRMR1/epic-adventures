import styled from "styled-components"

export const BottomDividerStyles = styled.div`
    padding: 0;
    margin: 0;
    position: relative;
    margin-top: ${({ marginTop }) => marginTop};
    z-index: 2;
    @media (max-width: 800px) {
        margin-top: ${({ marginTopMobile }) => marginTopMobile};
    }
`
