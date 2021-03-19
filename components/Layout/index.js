import { useEffect } from "react"
import Nav from "../Nav"
import Footer from "../Footer"
import tawkTo from "tawkto-react"
import GlobalStyles from "../styles/GlobalStyles"

const Layout = ({ children }) => {
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
        <div>
            <GlobalStyles />
            <Nav />
            <main>
                <div className="mainContainer">{children}</div>
            </main>
            <Footer year={year} />
        </div>
    )
}

export default Layout
