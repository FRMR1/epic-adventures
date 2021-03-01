import Image from "next/image"
import Link from "next/link"
import NavStyles from "../styles/NavStyles"

const Nav = () => {
    return (
        <NavStyles>
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
            <div className="navRight">
                <Link href="/about">About</Link>
                <Link href="/adventures">Adventures</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/bookings">Book Now</Link>
            </div>
        </NavStyles>
    )
}

export default Nav
