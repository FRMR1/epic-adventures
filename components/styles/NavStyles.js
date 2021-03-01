import styled from "styled-components"

const NavStyles = styled.div`
    margin: 0 auto;
    padding: 4rem 3rem;
    width: 100%;
    font-size: 1rem;
    max-width: 1200px;
    a,
    button {
        position: relative;
        text-transform: uppercase;
        font-weight: 400;
        font-size: 1.4rem;
        background: none;
        border: 0;
        color: var(--grey);
        cursor: pointer;
        @media (max-width: 700px) {
            font-size: 10px;
            padding: 0 10px;
        }
    }
    .navRight {
        float: right;
        a {
            margin-left: 3rem;
        }
    }
    @media (max-width: 1300px) {
        /* width: 100%; */
        /* justify-content: center; */
        font-size: 1.5rem;
    }
`

export default NavStyles
