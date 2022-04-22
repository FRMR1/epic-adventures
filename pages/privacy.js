import Head from "next/head";
import { PolicyStyles } from "../components/styles/PolicyStyles";
import { FooterDividerStyles } from "../components/styles/FooterDividerStyles";

const Privacy = () => {
  return (
    <>
      <Head>
        <title>Epic Adventures | Privacy Policy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PolicyStyles>
        <h3>Privacy Policy</h3>
        <p>
          Epic Adventure Group, is committed to maintaining the privacy of
          personal information that you provide to us when using any Epic
          Adventure Group websites. This Privacy Policy describes how we treat
          personal information received about you when you visit
          www.epicadventuregroup.com, www.epicrockies.com. We recommend that you
          review the privacy policy at each such web site to determine how that
          site protects your privacy.
        </p>
        <h3>Our Promise</h3>
        <p>
          While information is the cornerstone of our ability to provide
          superior service, our most important asset is our clients' trust.
          Keeping client information secure, and using it only as our clients
          would want us to, is a top priority for all of us at Epic Adventure
          Group. Here is our promise to our individual customers:
        </p>
        <ul>
          <li>
            We will safeguard, according to strict standards of security and
            confidentiality, any information our customers share with us.
          </li>
          <li>
            We will limit the collection and use of customer information to the
            minimum we require to deliver superior service to our customers,
            which includes advising our customers about our products, services
            and other opportunities, and to administer our business.
          </li>
          <li>
            We will permit only authorized employees, who are trained in the
            proper handling of customer information, to have access to that
            information. Employees who violate our Privacy Promise will be
            subject to our normal disciplinary process.
          </li>
          <li>
            We will not reveal customer information to any external organization
            unless we have previously informed the customer in disclosures or
            agreements, or are required by law.
          </li>
          <li>
            We will always maintain control over the confidentiality of our
            customer information. We may, however, share customer information
            with reputable companies when a customer has expressed an interest
            in their service or product. Please note that this Privacy Policy
            does not apply to these other companys use of customer information.
          </li>
          <li>
            Whenever we hire other organizations to provide support services, we
            will require them to conform to our privacy standards and to allow
            us to audit them for compliance.
          </li>
          <li>
            We will attempt to keep customer files complete, up-to-date, and
            accurate. We will tell our customers how and where to conveniently
            access their information (except when we’re prohibited by law) and
            how to notify us about errors which we will promptly correct.
          </li>
        </ul>
        <p style={{ marginTop: "8rem" }}>
          When you register/purchase, and at other times, we may collect
          personally identifiable information from you that may include your
          name, address, telephone number, e-mail address, and personal medical
          information if required for service. We do not, however, knowingly
          collect personal information from children under the age of 18, only
          age and DOB if it is required for services.
        </p>
      </PolicyStyles>
      <FooterDividerStyles>
        <img
          src="/svg/divider-top2.svg"
          width="101%"
          style={{ marginLeft: "-.2rem" }}
        />
      </FooterDividerStyles>
    </>
  );
};

export default Privacy;
