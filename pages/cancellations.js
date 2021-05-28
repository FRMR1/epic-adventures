import Head from "next/head"
import { PolicyStyles } from "../components/styles/PolicyStyles"
import { FooterDividerStyles } from "../components/styles/FooterDividerStyles"

const Cancellations = () => {
    return (
        <>
            <Head>
                <title>Epic Adventures | Cancellation Policy</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <PolicyStyles>
                <h3>Cancellation Policy</h3>
                <p>
                    Purchasers have until 48-hours prior to their scheduled
                    activity or tour to cancel and request a full refund, unless
                    otherwise stated on the confirmation document. Just call us
                    at least 48 hours prior to your tour to cancel and receive a
                    full refund, no questions asked. Purchasers of combos or
                    packages have until 72-hours prior to the first scheduled
                    activity to cancel and request a refund. Any cancellations
                    or requests received within 48 hours of your activity or
                    tour, late-comers, and no- shows will not be rescheduled or
                    refunded.
                </p>
                <p>
                    No-shows, missed departures or unused services will be
                    non-refundable. Possession of prohibited substances or drug
                    and alcohol impairment will result in cancellation without
                    refund. Exceptions: Group bookings of 9 or more guests and
                    private/custom bookings have until 7-days prior their first
                    scheduled activity to cancel and request a full refund. Any
                    cancellations or requests received within 7- days will be
                    considered at the discretion of Epic Adventure Group in
                    consultation with the operator. Operator Cancellations Tour
                    operators and/or guides have the final say on whether an
                    activity or tour will go ahead at any given time. Such
                    decisions may include (but are not limited to) reasons of
                    inclement or unfavourable weather, environmental concerns,
                    customer safety concerns or other unforeseen events that
                    necessitate the cancellation. In such cases, Epic Adventure
                    Group will first provide options for the customer to
                    reschedule and then refund the cost of that activity or tour
                    to the purchaser if rescheduling is not conducive.
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

export default Cancellations
