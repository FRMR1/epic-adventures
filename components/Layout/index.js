import Nav from "../Nav"
import Footer from "../Footer"
import GlobalStyles from "../styles/GlobalStyles"

const Layout = ({ children }) => {
    // Get current year
    const date = new Date()
    const year = date.getFullYear()

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
