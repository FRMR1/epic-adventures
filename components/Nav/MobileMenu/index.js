import Link from "next/link"
import { MobileMenuStyles } from "../../styles/MobileMenuStyles"

const MobileMenu = ({ isOpen, setIsOpen }) => {
    // Close menu when nav item is clicked
    const closeMenu = () => {
        setIsOpen(false)
    }

    return (
        <>
            <MobileMenuStyles isOpen={isOpen} setIsOpen={setIsOpen}>
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
                        <Link href="/adventures">
                            <a onClick={closeMenu}>Adventures</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/adventures/combos">
                            <a onClick={closeMenu}>Combos</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <a onClick={closeMenu}>Contact</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="bookings">
                            <a onClick={closeMenu}>Book Now</a>
                        </Link>
                    </li>
                </ul>
            </MobileMenuStyles>
        </>
    )
}

export default MobileMenu
