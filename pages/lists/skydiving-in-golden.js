import Head from "next/head";
import { TopListStyles } from "../../components/styles/TopListStyles";
import { FooterDividerStyles } from "../../components/styles/FooterDividerStyles";
import ReadyToBook from "../../components/ReadyToBook";
import { HeroImageStyles } from "../../components/styles/HeroImageStyles";
import { TopDividerStyles } from "../../components/styles/TopDividerStyles";
import { AdventureHeadingStyles } from "../../components/styles/AdventureHeadingStyles";
import { BottomDividerStyles } from "../../components/styles/BottomDividerStyles";
import Link from "next/link";
import { HeroVideoStyles } from "../../components/styles/HeroVideoStyles";
import CloudflareVideo from "../../components/CloudflareVideo";

const ListPage = () => {
  const videoURL = "225299687d98d673503b19426a2955ef";

  return (
    <>
      <Head>
        <title>Epic Adventures | Skydiving in Golden</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="heroVideo">
        <HeroVideoStyles>
          <CloudflareVideo source={videoURL} />
        </HeroVideoStyles>
      </div>
      <TopDividerStyles>
        <img
          src="/svg/divider-top.svg"
          width="101%"
          style={{ marginLeft: "-.2rem" }}
        />
      </TopDividerStyles>
      <AdventureHeadingStyles>
        <div className="oneCol">
          <p style={{ fontSize: "2rem" }}>
            If you are seeking an adrenaline rush and an unforgettable
            experience, skydiving in Golden, British Columbia is a must-try. The
            stunning natural scenery and breathtaking views make Golden an ideal
            location for skydiving enthusiasts, both experienced and beginners.
            Here are some reasons why you should try skydiving in Golden, BC.
          </p>
        </div>
      </AdventureHeadingStyles>
      <BottomDividerStyles marginTop="4.7rem">
        <img
          src="/svg/divider-bottom.svg"
          width="101%"
          style={{ marginLeft: "-.2rem" }}
        />
      </BottomDividerStyles>
      <TopListStyles>
        <div className="list">
          <ul>
            <li>
              Admire the Spectacular Views - Golden, BC is surrounded by
              majestic mountains, pristine forests, and crystal-clear lakes,
              providing an unparalleled scenic experience. While freefalling
              from an airplane, you will get a bird's eye view of the
              awe-inspiring natural beauty of the region. From up above, you can
              appreciate the vastness and majesty of the Canadian Rockies,
              making your skydiving experience all the more memorable.
            </li>
            <li>
              Experience the Ultimate Adrenaline Rush - Skydiving is a thrilling
              and unforgettable adventure that will give you an unparalleled
              adrenaline rush. Imagine the feeling of jumping from an airplane
              at thousands of feet in the air, the wind rushing past your face
              and the exhilaration of freefalling before deploying your
              parachute. Skydiving is an experience like no other, and Golden,
              BC is the perfect place to experience it.
            </li>
            <li>
              Professional and Experienced Instructors - Our professional and
              experienced skydiving instructors are certified by the Canadian
              Sport Parachuting Association and have thousands of jumps under
              their belts. They are passionate about skydiving and are dedicated
              to providing a safe and enjoyable experience. They will guide you
              through the entire process, from safety briefings to post-jump
              debriefings, ensuring that you have an unforgettable experience.
            </li>
            <li>
              State-of-the-art Equipment - At our skydiving center in Golden,
              BC, we use the latest state-of-the-art equipment to ensure your
              safety and comfort. Our equipment is rigorously tested and
              maintained to the highest standards to ensure your safety
              throughout your skydiving experience.
            </li>
            <li>
              An Experience That You Will Never Forget - Skydiving in Golden, BC
              is an experience that you will never forget. It is a unique and
              exhilarating adventure that will leave you with memories that will
              last a lifetime. Whether you are a seasoned skydiver or a
              first-timer, our instructors and facilities will ensure that you
              have a safe, enjoyable and unforgettable experience.
            </li>
          </ul>
        </div>
      </TopListStyles>
      <ReadyToBook />
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

export default ListPage;
