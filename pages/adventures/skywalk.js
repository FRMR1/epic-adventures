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
  const videoURL = "5e78dbf347bb7d285705c77d3924eb2d";

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
        <title>Epic Adventures | Skywalk</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="heroVideo">
        <HeroVideoStyles>
          <CloudflareVideo source={videoURL} />
        </HeroVideoStyles>
      </div>
      <HeroImageSlider
        title="Skywalk"
        images={[
          "https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/0da08f7d-74c3-440a-e480-806ec1f2a300/public",
        ]}
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
          <img src="/images/logos/columbiaicefield.svg" />
        </div>
        <div className="pContainer">
          <h2>Be Inspired</h2>
          <p>
            Step out on a cliff-edge walkway where giant glaciers perch above
            you and the spectacular Sunwapta Valley spreads out below. The
            Columbia Icefield Skywalk experience features waterfalls, wildlife,
            fossils and more on an exciting one-kilometre walkway that leads to
            a platform where glass is all that separates you from a 918 foot
            (280 m) drop. The walk is presented in an interpretive storytelling
            format that will connect you to the natural world in a deep and
            meaningful way.
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
              title="Glass Walkway"
              description="Walk off the cliff's edge on Pursuit's Skywalk glass floor."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/e0b73138-6d65-4b1e-fc92-6f2c9631f800/public"
            />
            <Card
              title="Views"
              description="Breathtaking views of the Sunwapta valley: see waterfalls, wildlife and Athabasca Glacier."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/46a1f7a1-108b-4db4-d558-c5624bc64d00/public"
            />
            <Card
              title="Shuttle"
              description="Shuttle from the Discovery Centre, with buses leaving every 15 minutes."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/523624fb-1336-4b56-a801-edf61a872e00/public"
            />
            <Card
              title="Restaurants"
              description="Enjoy the delicious cuisine of Altitude and Chalet Restaurants."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/6e6ededa-d7b9-40c5-ab5a-1ed94a97c600/public"
            />
            <Card
              title="Jasper National Park"
              description="Located on the edge of Jasper National Park, a UNESCO World Heritage site."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/3a606af3-4392-495c-d792-c2f4993ed800/public"
            />
          </Carousel>
        </div>
      </CardSectionStyles>

      <BookAdventureStyles>
        <h3>Our Epic Adventures</h3>
        <div className="twoCol">
          <div className="left">
            <Image
              src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/5ad57caa-ebfa-4cce-df9e-402062476a00/public"
              layout="fill"
              objectFit="contain"
              alt="Skywalk"
            />
          </div>
          <div className="right">
            <h3>Skywalk Experience</h3>
            <p>
              Explore the Sunwapta valley on this interpretive experience on a
              cliff's edge.
            </p>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Includes shuttle
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Skywalk experience
              </li>
            </ul>
            <div className="priceContainer">
              <span className="dollarSign">$</span>
              <span className="amount">34</span>
              <span className="currency">CAD</span>
            </div>
            <Link href="https://epicadventuregroup.rezdy.com/485243/skywalk">
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
      <WhyEpic style={{ marginTop: "10rem" }} />

      <AdventureSectionStyles>
        <div className="twoCol">
          <div className="left">
            <h3>Additional Details</h3>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Please bring ppropriate clothing and footwear for the weather.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Ages five and under ride for free but require a ticket.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Tours start at the Columbia Icefields discovery centre, you will
                be shuttled to the Skywalk. Shuttles leave every fifteen
                minutes.
              </li>
            </ul>
          </div>
          <div className="right">
            <div className="imageRotate">
              <Image
                src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/9d67bc03-77fb-4912-e055-0706b1e30500/public"
                layout="responsive"
                width="100%"
                height="auto"
                objectFit="contain"
                alt="Skywalk"
              />
            </div>
          </div>
        </div>
      </AdventureSectionStyles>
      <GoogleMap location={{ lat: 52.865406, lng: -118.092578 }} zoom={15} />
      <SuggestedCombosStyles>
        <h3>Suggested Adventures</h3>
        <div className="cards">
          <SuggestedCombo
            title="Columbia Icefield"
            description="An unforgettable tour onto the glaciers with this epic off road bus."
            image="34a9b175-de9e-401a-91e4-a0bd3eac5a00"
            url="/adventures/columbiaicefield"
            internal={true}
          />
          <SuggestedCombo
            title="Maligne Lake Cruise"
            description="A boutique cruise over the pristine lake and untouched scenery."
            image="c20cd904-9f5d-41fd-5b55-47895cf87b00"
            url="/adventures/malignelake"
            internal={true}
          />
          <SuggestedCombo
            title="Skytram"
            description="See the park from above and witness to the pure magnitude of the Rockies."
            image="3fd3e00c-5d89-478c-a4be-26ec8fd99b00"
            url="/adventures/skytram"
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

export default Skydiving;
