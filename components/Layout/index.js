import Nav from "../Nav"
import Footer from "../Footer"
import GlobalStyles from "../styles/GlobalStyles"

const Layout = ({ children }) => {
    return (
        <div>
            <GlobalStyles />
            <Nav />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout
