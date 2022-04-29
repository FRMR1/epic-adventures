import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import GoogleMap from "../../components/GoogleMap";
import SuggestedCombo from "../../components/SuggestedCombo";
import ReadyToBook from "../../components/ReadyToBook";
import { HeroImageStyles } from "../../components/styles/HeroImageStyles";
import { HeroVideoStyles } from "../../components/styles/HeroVideoStyles";
import { TestimonialStyles } from "../../components/styles/TestimonialStyles";
import { TopDividerStyles } from "../../components/styles/TopDividerStyles";
import { CardSectionStyles } from "../../components/styles/CardSectionStyles";
import { BottomDividerStyles } from "../../components/styles/BottomDividerStyles";
import { FooterDividerStyles } from "../../components/styles/FooterDividerStyles";
import { SuggestedCombosStyles } from "../../components/styles/SuggestedCombosStyles";
import { AdventureHeadingStyles } from "../../components/styles/AdventureHeadingStyles";
import { AdventureSectionStyles } from "../../components/styles/AdventureSectionStyles";
import { BookAdventureStyles } from "../../components/styles/BookAdventureStyles";
import dynamic from "next/dynamic";
import { MobileVideoStyles } from "../../components/styles/MobileVideoStyles";
import Carousel from "react-multi-carousel";
import Card from "../../components/Card";
import "react-multi-carousel/lib/styles.css";
import WhyEpic from "../../components/WhyEpic";

const CloudflareVideo = dynamic(
  () => import("../../components/CloudflareVideo"),
  {
    ssr: false,
  }
);

const HeroImageSlider = dynamic(
  () => import("../../components/HeroImageSlider"),
  {
    ssr: false,
  }
);

const MaligneLake = () => {
  // Cloudflare URL for video
  const videoURL = "56e51d33193853ced4b17bb6d65f58da";

  // Responsive breakpoints
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Head>
        <title>Epic Adventures | Heli Rafting</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroImageSlider
        title="Heli Rafting"
        images={[
          "https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/778f6d69-4366-4c98-a931-74bf6f68a400/public",
        ]}
        cdn={true}
        needsVideo={true}
      />
      <TopDividerStyles>
        <img
          src="/svg/divider-top.svg"
          width="101%"
          style={{ marginLeft: "-.2rem" }}
        />
      </TopDividerStyles>
      <AdventureHeadingStyles>
        <div className="imageContainer mobileImage">
          <img src="/images/logos/glacierrafting.svg" />
        </div>
        <div className="pContainer">
          <h2>Kicking Horse River Heli Rafting</h2>
          <p>
            Rafting on the mighty Kicking Horse River! On this trip you will
            take on the “upper” sections of the Kicking Horse River, then access
            the “lower” section via a helicopter, rafts and all. The lower
            section of the river is notorious for its epic white water and has
            been inaccessible in recent years. Glacier exclusively operates in
            both the upper and lower sections of the river making this one of
            Canada's premier white water rafting trips and rafting companies.
            This experience of a lifetime should not be missed and comes highly
            recommended from local and international rafting guides as one of
            Canada's best day trips. Your trip will finish floating through the
            beautiful town of Golden as you digest your experience with your
            rafting team.
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

      <CardSectionStyles>
        <div className="cards">
          <Carousel
            responsive={responsive}
            infinite={true}
            swipeable={true}
            draggable={true}
            containerClass="padding-100-px"
          >
            <Card
              title="Helicopter"
              description="Take on the “lower Kicking Horse River” where the ultimate white-knuckle, white-water fun is to be experienced. Only accessible by helicopter, this is a unique experience."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/e6c940c4-e443-4b53-59fc-743960dc1a00/public"
            />
            <Card
              title="Gear"
              description="Rafts, paddles, helmets, wetsuits, boots, splash tops and personal floatation device is just some of the gear you need but will be provided to succeed on this adventure. "
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/5d03b931-b28a-4455-0dba-29307a838b00/public"
            />
            <Card
              title="Safety Talk"
              description="Your guides will give you instructions on how to paddle and help yourself and the team get down the river safely."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/26028181-da20-486d-69f2-19cc46be8100/public"
            />
            <Card
              title="Rafting Basics"
              description="You will get a chance to practice everything you need with the instruction of your experienced guide."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/3043c3f4-7d62-4df4-6d14-d073d797c000/public"
            />
            <Card
              title="Scenery"
              description="Take in the views on Mother Nature's highway. The Kicking Horse Canyon and beautiful river views is half the fun."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/6ff1d513-84a1-4337-462b-e6bb74edb800/public"
            />
            <Card
              title="White Water Fun"
              description="Taking on the mighty Kicking Horse River, you will navigate through grade 3 and 4 rapids, soakin up the fun."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/e9382160-5295-46f9-e62a-0921a5dc3800/public"
            />
            <Card
              title="The Team"
              description="Bring your friends or make new ones, rafting a great team sport and teamwork is essential to conquering this challenge"
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/8960e219-ea8a-4832-14de-b2f3eb74c400/public"
            />
            <Card
              title="Book In Advance"
              description="Slots fill fast as this experience is extremely popular, be sure to get your spot."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/bc4d965f-26ad-408b-5bdf-92dce473c200/public"
            />
            <Card
              title="Waiver Forms"
              description="Download and read waiver forms before your trip."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/70cceb29-2205-4dd2-6a78-4adaad35d100/public"
            />
          </Carousel>
        </div>
      </CardSectionStyles>

      <BookAdventureStyles marginBottom={true}>
        <h3>Our Epic Adventures</h3>
        <div className="twoCol grey">
          <div className="left">
            <Image
              src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/ea302c98-cb0a-4005-371e-9e1f090fbb00/public"
              layout="fill"
              objectFit="contain"
              alt="Heli Rafting"
            />
          </div>
          <div className="right">
            <h3>Ultimate Heli Full Day</h3>
            <p>
              Challenge yourself and experience world-class white water and
              rafting on this exclusive day trip that will blow your mind.
            </p>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Lunch included
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Full day
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                No experience required
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Minimum age 16 years
              </li>
            </ul>
            <div className="priceContainer">
              <span className="dollarSign">$</span>
              <span className="amount">499</span>
              <span className="currency">CAD</span>
            </div>
            <Link href="https://epicadventuregroup.rezdy.com/145515/full-day-heli-rafting-the-ultimate-adventure">
              <a target="_blank" rel="noreferrer">
                <div className="button">
                  <span>Book Now</span>
                </div>
              </a>
            </Link>
          </div>
        </div>
        <div className="twoCol">
          <div className="left">
            <Image
              src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/b51ad5fd-b5fb-420f-9753-0b7dbe6bed00/public"
              layout="fill"
              objectFit="contain"
              alt="Heli Rafting"
            />
          </div>
          <div className="right">
            <h3>Pure Heli Half Day</h3>
            <p>
              Skip the easy waters and get right to it with an exhilarating
              half-day of white water rapids.
            </p>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                11am - 5:15pm
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Snacks included
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                No experience required
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Minimum age 16 years
              </li>
            </ul>
            <div className="priceContainer">
              <span className="dollarSign">$</span>
              <span className="amount">399</span>
              <span className="currency">CAD</span>
            </div>
            <Link href="https://epicadventuregroup.rezdy.com/145516/half-day-heli-rafting-pure-white-water">
              <a target="_blank" rel="noreferrer">
                <div className="button">
                  <span>Book Now</span>
                </div>
              </a>
            </Link>
          </div>
        </div>
        <div className="twoCol grey">
          <div className="left">
            <div>
              <Image
                src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/ca20ab16-0d8c-44c5-fa99-49a07fcf0700/public"
                layout="fill"
                objectFit="contain"
                alt="Combo"
              />
            </div>
          </div>
          <div className="right">
            <h3>Combo This Trip</h3>
            <p>Combo and experience more!</p>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Save money
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Save time
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Exclusive products
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Live EPIC!
              </li>
            </ul>
            <Link href="/combos">
              <div className="button">
                <span>More Info</span>
              </div>
            </Link>
          </div>
        </div>
      </BookAdventureStyles>
      <TopDividerStyles>
        <img
          src="/svg/divider-top.svg"
          width="101%"
          style={{ marginLeft: "-.2rem" }}
        />
      </TopDividerStyles>
      <TestimonialStyles>
        <p>
          “The guides were so knowledgeable and fun. The views were fantastic.
          The whole experience was a blast. Being on the water was thrilling and
          safe. It was one of the highlights of our trip to the Canadian
          Rockies.”
        </p>
        <div className="faceContainer">
          <img src="/svg/face.svg" width="30px" />
        </div>
        <p className="customerName">Braeden, Aug. 2020</p>
      </TestimonialStyles>
      <BottomDividerStyles>
        <img
          src="/svg/divider-bottom.svg"
          width="101%"
          style={{ marginLeft: "-.2rem" }}
        />
      </BottomDividerStyles>
      <WhyEpic style={{ marginTop: "10rem" }} />

      <AdventureSectionStyles>
        <div className="twoCol">
          <div className="left">
            <h3>Additional Details</h3>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Please bring appropriate clothing for the weather and a swimming
                outfit. Cold water and rafting kit will be provided.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                This trip runs on Saturdays and Wednesdays starting mid-July.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Must be at least 16 years old. Instructors will teach you
                everything you need to know with no experience required.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Photos and video available on the day of rafting will be
                available.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                <span>
                  Download the{" "}
                  <a href="#" target="_blank" rel="noreferrer">
                    waiver form
                  </a>{" "}
                  here. You can view our{" "}
                  <a href="/cancellations" target="_blank" rel="noreferrer">
                    cancellation policy
                  </a>{" "}
                  here.
                </span>
              </li>
            </ul>
          </div>
          <div className="right">
            <div className="imageRotate">
              <Image
                src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/c2a7c315-df71-4cc9-fc3f-91f1e5add700/public"
                layout="responsive"
                width="100%"
                height="auto"
                objectFit="contain"
                alt="Heli Rafting"
              />
            </div>
          </div>
        </div>
      </AdventureSectionStyles>
      <GoogleMap location={{ lat: 51.302704, lng: -116.947875 }} zoom={15} />
      <SuggestedCombosStyles>
        <h3>Suggested Adventures</h3>
        <div className="cards">
          <SuggestedCombo
            title="Kananaskis River"
            description="A classic rafting trip through the foot hills of the Rockies, blast the fun white-water and surf some waves."
            image="e7aad868-4c83-40b4-7998-1dd443781f00"
            url="/adventures/kananaskisriver"
            internal={true}
          />
          <SuggestedCombo
            title="Kicking Horse River"
            description="Take on the world famous Kicking Horse River. With rapids like Man Eater and Shot Gun, this river is an experience that can't be missed."
            image="c61cf00a-32f2-41c0-09fe-b2c742189700"
            url="/adventures/kickinghorseriver"
            internal={true}
          />
          <SuggestedCombo
            title="Heli Flight"
            description="Get the best seat above the mountains, take a helicopter over the Three Sisters mountain tops and experience the Rockies in style."
            image="c5ed939e-308e-4c19-58a7-cb8e744d6b00"
            url="/adventures/heliflight"
            internal={true}
          />
        </div>
      </SuggestedCombosStyles>
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

export default MaligneLake;
