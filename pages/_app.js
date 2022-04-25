import Layout from "../components/Layout";
import { MobileMenuStateProvider } from "../lib/mobileMenuState";
import "../components/styles/youtubeEmbed.css";

function MyApp({ Component, pageProps }) {
  return (
    <MobileMenuStateProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <a href="/hypedeals">
        <div
          style={{
            position: "sticky",
            left: "20px",
            bottom: "20px",
            zIndex: "9999",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "60px",
            height: "60px",
            backgroundColor: "#1CC2FF",
            padding: "10px",
            borderRadius: "30px",
          }}
        >
          <img src="/svg/deals2.svg" width="35" />
        </div>
      </a>
    </MobileMenuStateProvider>
  );
}

export default MyApp;
