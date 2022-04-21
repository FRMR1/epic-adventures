import Head from "next/head";
import { PolicyStyles } from "../components/styles/PolicyStyles";
import { FooterDividerStyles } from "../components/styles/FooterDividerStyles";

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
          Purchasers have until 48-hours prior to their scheduled activity or
          tour to cancel and request a full refund; minus $10 per item/person to
          cover credit cards transaction fees for any items $200 or less. Any
          refund over $200 per item/person will be calculated at 6% to cover the
          two transactions for cancelation. Just call us at least 48 hours prior
          to your tour to cancel to receive a refund, no questions asked.
          Purchasers of combos or packages have until 72-hours prior to the
          first scheduled activity to cancel and request a refund.
        </p>
        <p>
          Any cancellations or requests received within 48 hours of your
          activity or tour, late-comers, and no-shows will not be rescheduled or
          refunded. Tour operators and/or guides have the final say on whether
          an activity or tour will go ahead at any given time. Such decisions
          may include (but are not limited to) reasons of inclement or
          unfavourable weather, environmental concerns, customer safety concerns
          or other unforeseen events that necessitate the cancellation. In such
          cases, Epic Adventure Group will first provide options for the
          customer to reschedule and then refund the cost of that activity or
          tour to the purchaser if rescheduling is not conducive. Exceptions:
          Group bookings of 9 or more guests and private/custom bookings have
          until 7-days prior their first scheduled activity to cancel and
          request a full refund. Any cancellations or requests received within
          7-days will be considered at the discretion of Epic Adventure Group in
          consultation with the operator. Possession of prohibited substances or
          drug and alcohol impairment will result in cancellation without
          refund.
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
  );
};

export default Cancellations;
