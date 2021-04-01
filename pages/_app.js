import Layout from "../components/Layout"
import { MobileMenuStateProvider } from "../lib/mobileMenuState"
import "../globalStyles.css"

function MyApp({ Component, pageProps }) {
    return (
        <MobileMenuStateProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </MobileMenuStateProvider>
    )
}

export default MyApp
