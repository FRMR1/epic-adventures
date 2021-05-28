import Image from "next/image"
import Link from "next/link"
import { useMediaQuery } from "react-responsive"
import { useMobileMenuState } from "../../lib/mobileMenuState"

const Nav = () => {
    // Menu state
    const { isOpen, setIsOpen } = useMobileMenuState()

    // Close menu when nav item is clicked
    const closeMenu = () => {
        setIsOpen(false)
    }

    // Responsive
    const isMobile = useMediaQuery({ query: "(max-width: 800px)" })

    return (
        <div className="header">
            <div className="navContainer">
                <Link href="/">
                    <a>
                        <Image
                            src="/svg/logo.svg"
                            alt="Epic Adventures"
                            width={120}
                            height={60}
                        />
                    </a>
                </Link>
                <div
                    className="hamburgerMenu"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={`mobileMenuStyles ${isOpen && "isOpen"}`}>
                    <ul>
                        <li>
                            <Link href="/">
                                <a onClick={closeMenu}>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <a onClick={closeMenu}>About</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/summer">
                                <a onClick={closeMenu}>Summer</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/summer/combos">
                                <a onClick={closeMenu}>Combos</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://epicadventuregroup.rezdy.com/">
                                <a
                                    onClick={closeMenu}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Book Now
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="navRight">
                    <Link href="/about">About</Link>
                    <div className="dropdown">
                        <Link href="/summer">
                            <a className="dropDownLink">Summer</a>
                        </Link>
                        <div className="dropdownContent">
                            <Link href="/summer/combos">Combos</Link>
                            <Link href="/summer/rafting">Rafting</Link>
                            <Link href="/summer/skydiving">Skydiving</Link>
                            <Link href="/summer/atv">ATV Off-Road</Link>
                            <Link href="/summer/kickinghorse">
                                Kicking Horse Resort
                            </Link>
                            <Link href="/summer/skybridge">
                                Golden Skybridge
                            </Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <span className="dropDownLink">Winter</span>
                        <div className="dropdownContent">
                            <span>Stay tuned...</span>
                        </div>
                    </div>
                    <Link href="https://epicadventuregroup.rezdy.com/">
                        <a target="_blank" rel="noreferrer">
                            <button className="bookNow">Book Now</button>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Nav
