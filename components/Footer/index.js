import Link from "next/link"
import styled from "styled-components"

export const FooterStyles = styled.div`
    height: 750px;
    background-color: #303030;
    .footerInner {
        display: grid;
        grid-template-columns: 4fr 2fr 2fr 3fr;
        grid-template-rows: auto auto;
        max-width: 1000px;
        margin: 0 auto;
        padding-top: 25rem;
        .logoCopyright {
            position: relative;
            top: -8.5rem;
            img {
                margin-bottom: 2rem;
            }
            p {
                color: #747474;
                font-size: 1.2rem;
                margin: 0;
                letter-spacing: 0.07rem;
                font-weight: 300;
            }
        }
        .navigation,
        .adventures {
            h4 {
                letter-spacing: 0.5px;
                color: #dbdbdb;
                text-transform: none;
                font-size: 1.4rem;
                font-family: --apple-system, BlinkMacSystemFont, "Segoe UI",
                    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
                    "Helvetica Neue", sans-serif;
                font-weight: 400;
                margin: 0;
            }
            ul {
                list-style: none;
                margin: 0;
                margin-top: 1rem;
                padding: 0;
                li {
                    line-height: 2.6rem;
                    a {
                        color: #7b7b7b;
                        font-size: 1.3rem;
                        font-family: --apple-system, BlinkMacSystemFont,
                            "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
                            "Open Sans", "Helvetica Neue", sans-serif;
                        font-weight: 200;
                        letter-spacing: 0.15rem;
                    }
                }
            }
        }
        .policies {
            img {
                margin-right: 2rem;
            }
            .policyLinks {
                ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    margin-top: 1rem;
                    li {
                        line-height: 2.5rem;
                        a {
                            font-size: 1rem;
                            color: #7b7b7b;
                            text-transform: uppercase;
                            letter-spacing: 0.1rem;
                        }
                    }
                }
            }
        }
        .getInTouch {
            margin-top: 8rem;
            grid-column: 2 / 5;
            h3 {
                letter-spacing: 0.5px;
                color: #7b7b7b;
                text-transform: none;
                font-size: 1.6rem;
                font-family: --apple-system, BlinkMacSystemFont, "Segoe UI",
                    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
                    "Helvetica Neue", sans-serif;
                font-weight: 400;
                margin: 0;
            }
            a,
            span {
                text-decoration: underline;
                font-family: --apple-system, BlinkMacSystemFont, "Segoe UI",
                    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
                    "Helvetica Neue", sans-serif;
                color: #fff;
                font-size: 1.9rem;
            }
            span {
                display: block;
            }
        }
    }
`

const Footer = ({ year }) => {
    return (
        <FooterStyles>
            <div className="footerInner">
                <div className="logoCopyright">
                    <img src="/svg/logo-outline.svg" width="100" />
                    <p>© {year} Epic Adventure Group Ltd.</p>
                    <p>All rights reserved.</p>
                </div>
                <div className="navigation">
                    <h4>Navigation</h4>
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/adventures">Adventures</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="adventures">
                    <h4>Adventures</h4>
                    <ul>
                        <li>
                            <Link href="/adventures/rafting">Rafting</Link>
                        </li>
                        <li>
                            <Link href="/adventures/skydiving">Skydiving</Link>
                        </li>
                        <li>
                            <Link href="/adventures/swing">Swing</Link>
                        </li>
                        <li>
                            <Link href="/adventures/combos">Combos</Link>
                        </li>
                    </ul>
                </div>
                <div className="policies">
                    <div className="social">
                        <a href="#" target="_blank">
                            <img src="/svg/facebook.svg" width="22" />
                        </a>
                        <a href="#" target="_blank">
                            <img src="/svg/instagram.svg" width="22" />
                        </a>
                    </div>
                    <div className="policyLinks">
                        <ul>
                            <li>
                                <Link href="/about/refunds">
                                    <a>Refund Policy</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy">
                                    <a>Privacy Policy</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms">
                                    <a>Terms and Conditions</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="spacer"></div>
                <div className="getInTouch">
                    <h3>Get in touch</h3>
                    <a href="#">hello@epicadventuregroup.com</a>
                    <span>+1 800 555 EPIC</span>
                </div>
            </div>
        </FooterStyles>
    )
}

export default Footer
