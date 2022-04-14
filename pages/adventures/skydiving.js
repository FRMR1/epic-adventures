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

const Skydiving = () => {
  // Cloudflare URL for video
  const videoURL = "225299687d98d673503b19426a2955ef";

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
        <title>Epic Adventures | Skydiving</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="heroVideo">
        <HeroVideoStyles>
          <CloudflareVideo source={videoURL} />
        </HeroVideoStyles>
      </div>
      <HeroImageSlider
        title="Skydiving"
        images={["SKY1", "SKY2", "SKY3", "SKY4"]}
      />
      <TopDividerStyles>
        <img
          src="/svg/divider-top.svg"
          width="101%"
          style={{ marginLeft: "-.1rem" }}
        />
      </TopDividerStyles>
      <AdventureHeadingStyles>
        <div className="imageContainer mobileImage">
          <img src="/images/logos/extremeyeti.svg" />
        </div>
        <div className="pContainer">
          <h2>Skydive the Rockies</h2>
          <p>
            Take the challenge and skydive over the Canadian Rockies. This
            unique and once in a lifetime opportunity to jump over one of the
            world's most beautiful locations. With Mountain views as far as the
            eye can see, the flight to altitude is unforgettable. Skydive
            Extreme Yeti has been offering Skydives over the Rocky Mountains for
            over 10 years. Operating out of Golden B.C Airport this
            unforgettable leap of faith is one to take home and tell your
            friends or bring them with you. The drop zone is located 1.5 hours
            drive west of the town of Banff and is the closest mountain
            skydiving in Banff, Jasper, Lake Louise and Canmore.
          </p>
        </div>
      </AdventureHeadingStyles>
      <BottomDividerStyles marginTop="4.7rem">
        <img
          src="/svg/divider-bottom.svg"
          width="101%"
          style={{ marginLeft: "-.1rem" }}
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
              title="Technology"
              description="Tandem skydiving is a safe activity, but it does have inherent risks. Having the highest quality, well-maintained, and state of the art equipment is essential to the operation."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/0dd05d22-7277-4179-b81d-e5a424c71300/public"
            />
            <Card
              title="Training"
              description="Tandem skydiving is easy and accessible to anyone with a sense of adventure. The highly experienced skydive instructors will show you exactly what to do to make your dive safe and enjoyable."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/8540f0ea-13db-45a9-2682-02fb152b3800/public"
            />
            <Card
              title="Flight"
              description="Enjoy the ride up, as the airport gets smaller and the mountains become more unbelievable! These views cannot be beat."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/95a71a3f-6e3e-4451-e396-fecf4c437300/public"
            />
            <Card
              title="Skydive"
              description="One of the most memorable parts of the experience is when you leave the plane and take on the world. It's a feeling you will never forget, should we go again?"
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/b523b875-ab5f-4259-3c1d-b9751d606500/public"
            />
            <Card
              title="Parachuting"
              description="And just like that, a parachute opens above your head and everything is quiet. You get time to take in those views, talk about what just happened and descend back to the airport."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/7ea0cf81-ca22-4524-23d6-a28eba164400/public"
            />
            <Card
              title="Landing"
              description="The landing is soft and easy, with a couple of practices in the sky, your instructor will safely land you both at the airport."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/a45c1c16-675c-4e13-a3a5-5cee310af300/public"
            />
            <Card
              title="Safety"
              description="Customer experience and safety is a number one priority, using state of the art technology, highly experienced instructors and high industry standards, you can have confidence with your skydive."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/a1bf0929-9986-4c96-df49-538f63d86400/public"
            />
            <Card
              title="Book in Advance"
              description="Slots fill fast as this experience is extremely popular, be sure to get your spot."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/61423076-b46e-4905-23f4-6e59dc961300/public"
            />
            <Card
              title="Waiver Forms"
              description="Download and read waiver forms before your trip."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/e1ed9771-4ab4-4689-8257-3390a94ced00/public"
            />
          </Carousel>
        </div>
      </CardSectionStyles>

      <BookAdventureStyles marginBottom={true}>
        <h3>Our Epic Adventures</h3>
        <div className="twoCol">
          <div className="left">
            <Image
              src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/9169d5ab-a57a-4356-44f9-fe899c07a200/public"
              layout="fill"
              objectFit="contain"
              alt="Skydiving"
            />
          </div>
          <div className="right">
            <h3>Tandem Skydive</h3>
            <p>Skydive the Rockies at 120MPH with Skydive Extreme Yeti.</p>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                10,000 ft. skydive
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                No experience required
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Approx. 2+ hrs.
              </li>
            </ul>
            <div className="priceContainer">
              <span className="dollarSign">$</span>
              <span className="amount">329</span>
              <span className="currency">CAD</span>
            </div>
            <Link href="https://epicadventuregroup.rezdy.com/catalog/427160/combos">
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
            <Image
              src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/0bf2a24a-3dfb-475f-4dda-c3ee7f598800/public"
              layout="fill"
              objectFit="contain"
              alt="Skydiving"
            />
          </div>
          <div className="right">
            <h3>Extreme Altitude</h3>
            <p>Add some more airtime and go as high as possible!</p>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                13,000 ft. skydive
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Extra altitude
              </li>
            </ul>
            <div className="priceContainer">
              <span className="dollarSign">$</span>
              <span className="amount">100</span>
              <span className="currency">CAD/PERSON</span>
            </div>
            <Link href="https://epicadventuregroup.rezdy.com/catalog/427160/combos">
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
          style={{ marginLeft: "-.1rem" }}
        />
      </TopDividerStyles>
      <TestimonialStyles>
        <p>
          “I had an incredible time skydiving! I reccommend this to anyone
          looking to skydive for the first time! It was one of the best life
          experiences! The staff were very knowledgeable and knew what they were
          doing! Made us all feel safe.”
        </p>
        <div className="faceContainer">
          <img src="/svg/face.svg" width="30px" />
        </div>
        <p className="customerName">Juan G., July 2020</p>
        <p>
          “Amazing views, amazing weather, amazing staff. Everybody there went
          out of their way to make our experience memorable. Couldn't say enough
          good things. 5 stars”
        </p>
        <div className="faceContainer">
          <img src="/svg/face.svg" width="30px" />
        </div>
        <p className="customerName">Mikey O., August 2020</p>
      </TestimonialStyles>
      <BottomDividerStyles>
        <img
          src="/svg/divider-bottom.svg"
          width="101%"
          style={{ marginLeft: "-.1rem" }}
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
                Must be at least 19 Years old and under 230 lbs.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Skydiving is a very weather dependent activity and cancellations
                due to unsuitable weather conditions may occur. Full refunds
                will be provided if your time slot cannot be rescheduled.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                <span>
                  Schueduled closures of the Trans-Canada Highway are planned
                  through the late spring. Visit{" "}
                  <a href="https://drivebc.ca" target="_blank" rel="noreferrer">
                    drivebc.ca
                  </a>{" "}
                  for more information and for the latest road reports and
                  conditions.
                </span>
              </li>
            </ul>
          </div>
          <div className="right">
            <div className="imageRotate">
              <Image
                src="/images/skydiving5.jpg"
                layout="responsive"
                width="100%"
                height="auto"
                objectFit="contain"
                alt="Skydiving"
              />
            </div>
          </div>
        </div>
      </AdventureSectionStyles>
      <GoogleMap location={{ lat: 51.30054, lng: -116.98498 }} zoom={15} />
      <SuggestedCombosStyles>
        <h3>Suggested Combos</h3>
        <div className="cards">
          <SuggestedCombo
            title="Epic Golden Pass"
            description="Rafting Kicking Horse river full day, skydiving, ATV half day."
            image="595ec27a-72a8-45c6-99a4-d7c50fead200"
            url="https://epicadventuregroup.rezdy.com/443894/combo-epic-golden-pass-raft-skydive-atv-multi-day"
          />
          <SuggestedCombo
            title="Golden Ultimate"
            description="Rafting full day Kicking Horse river, skydiving, ATV half-day, via ferrata (Discovery route Kicking Horse)."
            image="379df31d-2ab4-495a-21d3-cce6e7585100"
            url="https://epicadventuregroup.rezdy.com/485632/combo-golden-ultimate-raft-skydive-atv-via-ferrata-multi-day"
          />
          <SuggestedCombo
            title="Dirt Dive"
            description="Half-day ATV trip, skydiving."
            image="450331df-2fcb-4401-853a-4bf6bbd10f00"
            url="https://epicadventuregroup.rezdy.com/443897/combo-dirt-dive-atv-skydive"
          />
        </div>
      </SuggestedCombosStyles>
      <ReadyToBook />
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

export default Skydiving;
