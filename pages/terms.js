import Head from "next/head"
import { PolicyStyles } from "../components/styles/PolicyStyles"
import { FooterDividerStyles } from "../components/styles/FooterDividerStyles"

const Terms = () => {
    return (
        <>
            <Head>
                <title>Epic Adventures | Terms & Conditions</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <PolicyStyles>
                <h3>Terms & Conditions</h3>
                <p>
                    Full payment or deposits will be made by credit card to make
                    a reservation. Prices are per person in Canadian Dollars,
                    unless otherwise specified. Prices exclude GST and local
                    taxes or fees unless otherwise stated. Price quotations are
                    subject to change without notice until a booking has been
                    confirmed. Tips and gratuities to tour guides are not
                    included, but are appreciated. Certain products may involve
                    other charges including river fees or attraction entry.
                    Duration of tours may vary due to weather, traffic, road
                    maintenance, and size of the group(s). While Epic Adventure
                    Group will endeavour to co-ordinate the tour as indicated,
                    all tours are subject to change without notice. We are not
                    responsible for damaged personal items on tours, rides or
                    activities. Epic Adventure Group cannot be held liable for
                    any injuries, losses or damages in any such way. You accept
                    the tour or activities minimum personal requirements and
                    commit to adhere to specific safety protocols.
                </p>
                <p>
                    Unless otherwise stated in the product detail, these
                    policies apply to all products sold on this site
                </p>
                <h3>Covid-19 Protocols</h3>
                <p>
                    Anyone displaying symptoms of COVID-19, which primarily
                    displays as a persistent cough or other typical symptoms,
                    please stay home. If you have travelled outside Canada, you
                    are required to self-isolate for a minimum of 14 days after
                    arrival. If you live in a household where someone is showing
                    symptoms of COVID-19, please stay home. If you have
                    underlying medical conditions, it is recommended that you
                    stay home at this time. Physical distancing is required at
                    all times (minimum of 2 meters). Most tours and activities
                    require a face mask and may have additional COVID-19 safety
                    protocols that must be followed by all participants. Tours
                    may be cancelled at any time at the discretion of the guide
                    or tour operator.
                </p>
            </PolicyStyles>
            <FooterDividerStyles>
                <img
                    src="/svg/divider-top2.svg"
                    width="101%"
                    style={{ marginLeft: "-.1rem" }}
                />
            </FooterDividerStyles>
        </>
    )
}

export default Terms
