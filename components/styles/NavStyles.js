import styled from "styled-components"

const NavStyles = styled.div`
    margin: 0 auto;
    padding: 4rem 3rem;
    width: 100%;
    font-size: 1rem;
    max-width: 1200px;
    display: grid;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 99;
    .navContainer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-align: center;
    }
    a,
    button {
        position: relative;
        text-transform: uppercase;
        font-family: Roboto Mono;
        font-weight: 400;
        font-size: 1.3rem;
        background: none;
        border: 0;
        color: var(--darkGrey);
        cursor: pointer;
        @media (max-width: 700px) {
            font-size: 10px;
            padding: 0 10px;
        }
    }
    a:hover {
        text-decoration: none;
        color: #747474;
    }
    .bookNow {
        background-color: var(--aquaGreen);
        padding: 1.5rem 2.5rem;
        border-radius: 3px;
        margin-left: 3rem;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
    }
    .navRight {
        display: flex;
        align-items: center;
        a {
            margin-left: 4rem;
        }
    }
    .dropdown {
        position: relative;
        display: inline-block;
    }
    .dropdownContent {
        display: none;
        position: absolute;
        z-index: 1;
        padding-top: 1rem;
    }
    .dropdownContent a {
        padding: 0.5rem 0 0;
        text-decoration: none;
        display: block;
        text-align: left;
        color: #9b9b9b;
    }
    .dropdown:hover .dropdownContent {
        display: block;
    }
    .dropdown:hover a {
        color: #747474;
    }
    .dropdownContent a:hover {
        color: #555;
    }
    @media (max-width: 1300px) {
        /* width: 100%; */
        /* justify-content: center; */
        font-size: 1.5rem;
    }
`

export default NavStyles
