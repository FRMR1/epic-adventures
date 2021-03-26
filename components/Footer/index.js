import Link from "next/link"

const Footer = ({ year }) => {
    return (
        <div className="footer">
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
        </div>
    )
}

export default Footer
