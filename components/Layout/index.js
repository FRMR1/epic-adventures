import { createContext, useEffect } from "react"
import Nav from "../Nav"
import Footer from "../Footer"
import tawkTo from "tawkto-react"
import GlobalStyles from "../styles/GlobalStyles"
import { useMobileMenuState } from "../../lib/mobileMenuState"

const Layout = ({ children }) => {
    // Get mobile menu open state
    const { isOpen } = useMobileMenuState()

    // Get current year
    const date = new Date()
    const year = date.getFullYear()

    // Live chat
    useEffect(() => {
        tawkTo(
            process.env.NEXT_PUBLIC_TAWK_TO_ID,
            process.env.NEXT_PUBLIC_TAWK_TO_KEY
        )
    }, [])

    return (
        <>
            <GlobalStyles isMobileMenuOpen={isOpen} />
            <Nav />
            <main>{children}</main>
            <Footer year={year} />
        </>
    )
}

export default Layout
