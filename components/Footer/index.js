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
                <div className="adventures">
                    <h4>Adventures</h4>
                    <ul>
                        <li>
                            <Link href="/summer/combos">Combos</Link>
                        </li>
                        <li>
                            <Link href="/summer/rafting">Rafting</Link>
                        </li>
                        <li>
                            <Link href="/summer/skydiving">Skydiving</Link>
                        </li>
                        <li>
                            <Link href="/summer/atv">ATV Off-Road</Link>
                        </li>
                        <li>
                            <Link href="/summer/kickinghorse">
                                Kicking Horse
                            </Link>
                        </li>
                        <li>
                            <Link href="/summer/skybridge">
                                Golden Skybridge
                            </Link>
                        </li>
                    </ul>
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
                            <Link href="/summer">Adventures</Link>
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
                    <br />
                    <a href="tel:+12509398820">+1 250 939 9589</a>
                </div>
            </div>
        </div>
    )
}

export default Footer
