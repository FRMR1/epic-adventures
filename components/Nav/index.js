import Image from "next/image"
import Link from "next/link"
import MobileMenu from "./MobileMenu"
import MediaQuery from "react-responsive"
import { useMobileMenuState } from "../../lib/mobileMenuState"

const Nav = () => {
    const { isOpen, setIsOpen } = useMobileMenuState()

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
                {/* <MediaQuery maxWidth={768}>
                    <div
                        className="hamburgerMenu"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
                </MediaQuery>
                <MediaQuery minWidth={769}>
                    <div className="navRight">
                        <Link href="/about">About</Link>
                        <div className="dropdown">
                            <Link href="/summer">Summer</Link>
                            <div className="dropdownContent">
                                <Link href="/summer/combos">Combos</Link>
                                <Link href="/summer/rafting">Rafting</Link>
                                <Link href="/summer/skydiving">Skydiving</Link>
                                <Link href="/summer/atvoffroad">
                                    ATV Off Road
                                </Link>
                                <Link href="/summer/kickinghorse">
                                    Kicking Horse Resort
                                </Link>
                                <Link href="/summer/goldenskybridge">
                                    Golden Sky Bridge
                                </Link>
                            </div>
                        </div>
                        <Link href="/contact">Contact</Link>
                        <Link href="/bookings">
                            <button className="bookNow"> Book Now</button>
                        </Link>
                    </div>
                </MediaQuery> */}
            </div>
        </div>
    )
}

export default Nav
