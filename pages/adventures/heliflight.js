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
        <title>Epic Adventures | Heli Flight</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="heroVideo">
        <HeroVideoStyles>
          <CloudflareVideo source={videoURL} />
        </HeroVideoStyles>
      </div>
      <HeroImageSlider
        title="Heli Flights"
        images={[
          "https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/dbb86c06-668d-4dc3-9e00-29ba001db000/public",
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
          <img src="/images/logos/alpineheli.svg" />
        </div>
        <div className="pContainer">
          <h2>Banff and Canmore Scenic Flights</h2>
          <p>
            Charter your helicopter into the open skies above the Three Sisters
            peaks or Mt Assiniboine and Glaciers. Located in Canmore, Alpine
            Helicopters is a household name offering scenic flights since 1961.
            Here you will get unparalleled views of the park as you and your
            pilot navigate the Canadian Rockies. Start your heli adventure here.
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
              title="Helicopter"
              description="These helis can take a maximum of five adults for an intimate flight above the mountains."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/c5ed939e-308e-4c19-58a7-cb8e744d6b00/public"
            />
            <Card
              title="Pilots"
              description="Highly skilled alpine pilots will navigate the sky and share some of the local secrets and history."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/66a15545-aac3-4be4-6f7e-a349ff4bf700/public"
            />
            <Card
              title="Views"
              description="Once you leave the ground and ascend into the air you get the best views with little effort so you can relax and take it in."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/551717b9-68f7-4368-93e9-d678c16f4c00/public"
            />
            <Card
              title="Explore"
              description="There is no better way to get a real sense of the Canadian Rockies and how magnificent they really are."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/7581a9f6-33d2-4210-0add-f7ba4b9f5b00/public"
            />
            <Card
              title="Safety"
              description="Customer experience and safety is a number one priority with high industry standards you can have confidence with your journey into the sky."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/833e452c-32ab-4062-b9fa-d1cef9ff5900/public"
            />
            <Card
              title="Book In Advance"
              description="Slots fill fast as this experience is extremely popular, be sure to get your spot."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/7e577f29-ec34-4db8-b302-301a1f1cda00/public"
            />
          </Carousel>
        </div>
      </CardSectionStyles>

      <BookAdventureStyles marginBottom={true}>
        <h3>Our Epic Adventures</h3>
        <div className="twoCol grey">
          <div className="left">
            <Image
              src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/48693f6b-e791-4232-f528-806c02b4f400/public"
              layout="fill"
              objectFit="contain"
              alt="Heli flights"
            />
          </div>
          <div className="right">
            <h3>Three Sisters Peak Tour</h3>
            <p>
              Your adventure will take you up to the three sisters peak and to
              the magnificent spray lakes, witness the turquoise lakes and
              surrounding mountains.
            </p>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Duration: 25 min.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Minimum 2 passengers
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Maximum 5 passengers
              </li>
            </ul>
            <div className="priceContainer">
              <span className="dollarSign">$</span>
              <span className="amount">280</span>
              <span className="currency">CAD/PERSON</span>
            </div>
            <Link href="https://epicadventuregroup.rezdy.com/485003/heli-flight-three-sisters-peak-tour">
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
              src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/b4753ea8-acc8-405c-22c9-f89212cf6c00/public"
              layout="fill"
              objectFit="contain"
              alt="Heli flights"
            />
          </div>
          <div className="right">
            <h3>Mt. Assiniboine And Glaciers Tour</h3>
            <p>
              Your adventure will take you up to the three sisters peak and
              beyond into the “Matterhorn of the Canadian Rockies” with stunning
              glacial views.
            </p>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Duration: 35 min.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Minimum 2 passengers
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Maximum 5 passengers
              </li>
            </ul>
            <div className="priceContainer">
              <span className="dollarSign">$</span>
              <span className="amount">380</span>
              <span className="currency">CAD/PERSON</span>
            </div>
            <Link href="https://epicadventuregroup.rezdy.com/485006/heli-flight-mt-assiniboine-and-glaciers-tour">
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
              src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/92c72285-ac88-404b-eba9-2ce4a7fead00/public"
              layout="fill"
              objectFit="contain"
              alt="Heli flights"
            />
          </div>
          <div className="right">
            <h3>Continental Divide Tour</h3>
            <p>
              The Continental Divide is not only an extension of the Three
              Sisters Peaks Tourm, it's a journey that will take you deeper into
              the most majestic landscape Canada has to offer.
            </p>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Duration: 45 min.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Minimum 2 passengers
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Maximum 5 passengers
              </li>
            </ul>
            <div className="priceContainer">
              <span className="dollarSign">$</span>
              <span className="amount">480</span>
              <span className="currency">CAD/PERSON</span>
            </div>
            <Link href="https://epicadventuregroup.rezdy.com/485008/heli-flight-continental-divide-tour">
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
              src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/efaec509-b6a0-4499-251d-6c5c4621df00/public"
              layout="fill"
              objectFit="contain"
              alt="Heli flights"
            />
          </div>
          <div className="right">
            <h3>Marvel Pass Tour</h3>
            <p>
              Over the Spray Reservoir and the high ridges to Marvel Lake and
              the famous Mount Assiniboine, also known as the “Matterhorn of the
              Rockies”. Heading south to Marvel Pass, where you set down at 7200
              feet, close to Aurora Lake.
            </p>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Duration: 55 min.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Minimum 2 passengers
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Maximum 5 passengers
              </li>
            </ul>
            <div className="priceContainer">
              <span className="dollarSign">$</span>
              <span className="amount">700</span>
              <span className="currency">CAD/PERSON</span>
            </div>
            <Link href="https://epicadventuregroup.rezdy.com/485009/heli-flight-marvel-pass-tour">
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
      <TopDividerStyles>
        <img
          src="/svg/divider-top.svg"
          width="101%"
          style={{ marginLeft: "-.1rem" }}
        />
      </TopDividerStyles>
      <TestimonialStyles>
        <p>
          “Alpine Helicopters was amazing. We saw amazing sites and our pilot
          was very knowledgeable and informative. It was an incredible
          experience, highly recommend. It does get pretty warm inside the
          helicopter. I had to shed 2 of my 3 layers I was wearing since it was
          so cold out.”
        </p>
        <div className="faceContainer">
          <img src="/svg/face.svg" width="30px" />
        </div>
        <p className="customerName">Clay, Dec. 2021</p>
        <p>
          “Amazing experience, very professional and safe. Would recommend to
          anyone. Trip was without turbulence. Views are incredible.”
        </p>
        <div className="faceContainer">
          <img src="/svg/face.svg" width="30px" />
        </div>
        <p className="customerName">Cesar L., Nov. 2021</p>
      </TestimonialStyles>
      <BottomDividerStyles>
        <img
          src="/svg/divider-bottom.svg"
          width="101%"
          style={{ marginLeft: "-.1rem" }}
        />
      </BottomDividerStyles>
      <WhyEpic />
      <AdventureSectionStyles>
        <div className="twoCol">
          <div className="left">
            <h3>Additional Details</h3>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                <span>
                  You can view ther tour{" "}
                  <a
                    href="/heliflightterms.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    terms and conditions
                  </a>{" "}
                  here.
                </span>
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Please book ahead, slots fill up fast.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                <span>
                  You can view our{" "}
                  <a href="cancellations" target="_blank" rel="noreferrer">
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
                src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/e53eb66e-4ae5-49af-c394-3fb5c2d39400/public"
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
      <GoogleMap location={{ lat: 51.079041, lng: -115.338554 }} zoom={15} />
      <SuggestedCombosStyles>
        <h3>Suggested Adventures</h3>
        <div className="cards">
          <SuggestedCombo
            title="Canyoning"
            description="Repel waterfalls, swim the canyon waters and explore the mountains a little differently, this is a trip of a lifetime."
            image="b38ca2d9-dbd2-4f6e-95ca-49b634538f00"
            url="/adventures/canyoning"
            internal={true}
          />
          <SuggestedCombo
            title="Caving"
            description="Take yourself underground in this unique experience inside the bow valley mountains. This trip will expand your relationship with the mountains and local habitat. "
            image="c3eff5e5-8bc1-45a6-8ab3-07dfb6cf5800"
            url="/adventures/caving"
            internal={true}
          />
          <SuggestedCombo
            title="Kananaskis River"
            description="A classic rafting trip through the foot hills of the Rockies, blast the fun white-water and surf some waves."
            image="e7aad868-4c83-40b4-7998-1dd443781f00"
            url="/adventures/kananaskisriver"
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

export default MaligneLake;
