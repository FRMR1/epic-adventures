import Image from "next/image"
import Link from "next/link"
import NavStyles from "../styles/NavStyles"

const Nav = () => {
    return (
        <NavStyles>
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
                <div className="navRight">
                    <Link href="/about">About</Link>
                    <Link href="/adventures">Adventures</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="/bookings">
                        <button className="bookNow"> Book Now</button>
                    </Link>
                </div>
            </div>
        </NavStyles>
    )
}

export default Nav
