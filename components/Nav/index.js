import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import MobileMenu from "./MobileMenu"
import NavStyles from "../styles/NavStyles"
import MediaQuery from "react-responsive"
import { useMobileMenuState } from "../../lib/mobileMenuState"

const Nav = () => {
    const { isOpen, setIsOpen } = useMobileMenuState()

    console.log(isOpen)

    return (
        <>
            <NavStyles isOpen={isOpen}>
                <div className="navContainer">
                    <Link href="/">
                        <a>
                            <Image
                                src="/svg/logo.svg"
                                alt="Epic Adventures"
                                width={100}
                                height={50}
                            />
                        </a>
                    </Link>
                    <MediaQuery maxWidth={768}>
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
                                <Link href="/adventures">Adventures</Link>
                                <div className="dropdownContent">
                                    <Link href="/adventures/rafting">
                                        Rafting
                                    </Link>
                                    <Link href="/adventures/skydiving">
                                        Skydiving
                                    </Link>
                                    <Link href="/adventures/swing">Swing</Link>
                                    <Link href="/adventures/combos">
                                        Combos
                                    </Link>
                                </div>
                            </div>
                            <Link href="/contact">Contact</Link>
                            <Link href="/bookings">
                                <button className="bookNow"> Book Now</button>
                            </Link>
                        </div>
                    </MediaQuery>
                </div>
            </NavStyles>
        </>
    )
}

export default Nav
