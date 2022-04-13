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

const MountainBiking = () => {
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
        <title>Epic Adventures | Mountain Biking</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroImageSlider
        title="Mountain Biking"
        images={[
          "https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/b38452e2-948a-420a-3b97-0ff452cebe00/public",
        ]}
        needsVideo={true}
        cdn={true}
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
          <img src="/images/logos/kickinghorse.svg" />
        </div>
        <div className="pContainer">
          <h2>Mountain Bike Park</h2>
          <p>
            The start of it is the view from the alpine launch which is
            dominated by the three mountain ranges that surround the park, and
            the wetlands of the Columbia Valley. From there it is all downhill
            where the wahoo factor is amplified by multiple berms, jumps, wooden
            features (Stickrock has to been ridden to be believed), rock slabs
            (look directly below the gondola to see the longest) and plenty of
            good ol' white-knuckle singletrack. The only thing missing is
            crowds, but we suspect you won't mind that.
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
              title="Gondola"
              description="Take the Golden Eagle Express to the top of the bike park in under fifteen minutes."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/7c0cdb2b-54e3-4cbf-aa82-97426d8a6300/public"
            />
            <Card
              title="Catamount"
              description="Gain access to the catamount chair lift."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/db69c938-510d-4186-7181-5765bf3e1600/public"
            />
            <Card
              title="Trails"
              description="The Kicking Horse trail crew design and maintain epic world class trails."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/69256104-8b47-41b1-48a2-d88cee247100/public"
            />
            <Card
              title="Rental"
              description="Need gear? Don't worry you can take your pick of high-quality equipment."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/ca2f8de2-3378-4d72-8d94-1839f7b55300/public"
            />
          </Carousel>
        </div>
      </CardSectionStyles>

      <BookAdventureStyles>
        <h3>Our Adventures</h3>
        <div className="twoCol">
          <div className="left">
            <Image
              src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/5e6582e7-bd22-4576-fcf0-662aa1c84400/public"
              layout="fill"
              objectFit="contain"
              alt="Bike Lift Park Pass"
            />
          </div>
          <div className="right">
            <h3>Bike Lift Park Pass</h3>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Gondola and catamount access
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Full day pass
              </li>
            </ul>
            <div className="priceContainer">
              <span className="dollarSign">$</span>
              <span className="amount">TBD</span>
              <span className="currency">CAD</span>
            </div>
            <Link href="https://epicadventuregroup.rezdy.com/444042/mountain-bike-park-pass-kicking-horse-resort">
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
              src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/d8e05444-4d2f-4768-2a5e-ab733a021500/public"
              layout="fill"
              objectFit="contain"
              alt="Bike Lift Park Pass"
            />
          </div>
          <div className="right">
            <h3>Bike Lift Park Pass and Gear Rental</h3>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Gondola and catamount access
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Full day pass
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Safety equipment and bike rental
              </li>
            </ul>
            <div className="priceContainer">
              <span className="dollarSign">$</span>
              <span className="amount">TBD</span>
              <span className="currency">CAD</span>
            </div>
            <Link href="https://epicadventuregroup.rezdy.com/484986/mountain-bike-park-pass-gear-rental-kicking-horse-resort">
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
                alt="ATV Off-Road"
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
            <Link href="https://epicadventuregroup.rezdy.com/catalog/427160/combos">
              <a target="_blank" rel="noreferrer">
                <div className="button">
                  <span>More Info</span>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </BookAdventureStyles>
      {/* <TopDividerStyles>
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
      </BottomDividerStyles> */}
      <WhyEpic />
      <GoogleMap location={{ lat: 51.29879, lng: -117.048391 }} zoom={15} />
      <SuggestedCombosStyles>
        <h3>Suggested Adventures</h3>
        <div className="cards">
          <SuggestedCombo
            title="Golden Gondola"
            description="Take the Golden Eagle Express Gondola to the top of the resort to get those mountain views and access hiking trails."
            image="545e27e2-072f-4e13-253f-40898912f800"
            url="/adventures/goldengondola"
            internal={true}
          />
          <SuggestedCombo
            title="Via Ferrata Kicking Horse"
            description="Challenge yourself on this guided trip on the side of the mountain peaks. With unforgettable views this outdoor adventure you won't forget."
            image="11e9dbeb-b46d-4322-88e9-9172f64a2800"
            url="/adventures/viakickinghorse"
            internal={true}
          />
          <SuggestedCombo
            title="Rafting Kicking Horse River"
            description="Take on the world famous Kicking Horse River. With rapids like Man Eater and Shot Gun, this river is an experience that can't be missed."
            image="c61cf00a-32f2-41c0-09fe-b2c742189700"
            url="/adventures/kickinghorseriver"
            internal={true}
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

export default MountainBiking;
