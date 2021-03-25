import styled from "styled-components"

export const MobileMenuStyles = styled.div`
    position: absolute;
    overflow: hidden;
    z-index: 9998;
    width: 100vw;
    height: 100vh;
    background-color: #303030;
    left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    transition: left 0.4s cubic-bezier(0.77, 0.2, 0.05, 1);
    top: 0;
    margin: 0;
    padding: 0;
    display: grid;
    ul {
        align-self: center;
        margin: 0;
        padding: 0;
        li {
            list-style: none;
            line-height: 6rem;
            a {
                font-size: 4.3rem;
                font-family: "Futura";
                color: #eee;
            }
        }
    }
    /* left: -100%; */
`
