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
import { ActivityTilesStyles } from "../../components/styles/ActivityTilesStyles";
import ActivityTile from "../../components/ActivityTile";

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
        <title>Epic Adventures | Golden Skybridge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroImageSlider
        title="Golden Skybridge"
        images={["SKYBRIDGE1", "SKYBRIDGE2", "SKYBRIDGE3", "SKYBRIDGE4"]}
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
          <img src="/images/logos/skybridge.svg" />
        </div>
        <div className="pContainer">
          <h2>Canada's Highest Suspension Bridges</h2>
          <p>
            Golden's newest must-visit attraction includes a Treetop Village
            play park for families, an outdoor BBQ and entertainment plaza at
            the Village Grill, trails and viewing platforms throughout the park,
            two of Canada's highest suspension bridges, ziplines and giant
            swing. This experience is as Golden as it gets and is a must stop
            for families or the adventure seeker. Located just 10 minutes from
            downtown Golden and 2 minutes off the Trans-Canada Highway, don't
            miss it!
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
              title="Viewing Platforms"
              description="Take in epic views of the Columbia Valley and Canyon. Watch the swing and the zipline in action."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/f24eaed9-cac5-4f55-37a9-16db31ec7b00/public"
            />
            <Card
              title="Suspension Bridges"
              description="Home to two of Canadas highest suspension bridges 426 feet above the thundering river below."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/e4f24150-dfa8-4425-9ece-b3c0878e1a00/public"
            />
            <Card
              title="Playground"
              description="For the Family, the kids won't stop playing in the tree houses and mini bridges built inside the forest. "
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/dfa30fed-fc0e-458e-a29d-39428f1d9d00/public"
            />
            <Card
              title="Giant Swing"
              description="COMING SOON. Do you have what it takes to take on the Giant swing? This tandem or single swing is a unique adventure in Canada."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/e3bcbb85-bf44-4f83-3ff0-fbb75b754e00/public"
            />
            <Card
              title="Ziplines"
              description="Race your friends and family across the canyon on the exhilarating ziplines above the trees."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/cdc54b8e-adc3-4920-1fc7-a80a1a1ffd00/public"
            />
            <Card
              title="Explore"
              description="Take the forest trails on either side of the canyon and explore the park."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/ffb03de3-fb46-4a35-1d73-0936f8055000/public"
            />
            <Card
              title="Village Grill"
              description="Enjoy a beverage and some food in the village."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/0c19b424-dd15-4341-f055-c1f33e5c2700/public"
            />
          </Carousel>
        </div>
      </CardSectionStyles>

      <BookAdventureStyles>
        <h3>Our Epic Adventures</h3>
        <div className="twoCol">
          <div className="left">
            <div className="imageRotate">
              <Image
                src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/6abdeee9-f6da-4aae-1cf5-22e768ec8200/public"
                layout="fill"
                objectFit="contain"
                alt="Golden Skybridge"
              />
            </div>
          </div>
          <div className="right">
            <h3>Park Entry</h3>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                All day park entry
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Price listed is for one adult
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Family and child prices available
              </li>
            </ul>
            <div className="priceContainer">
              <span className="dollarSign">$</span>
              <span className="amount">45</span>
              <span className="currency">CAD</span>
            </div>
            <Link href="https://bookings.banffjaspercollection.com/RKY/activities/details/1/YGE-GSB/Attraction?WebLink=8f0seDFyNaNxkm6y3D6isA%3d%3d&agencyNumber=5007167&wlid=920&lob=Golden+Skybridge#/select-ticket/book-adventure">
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
            <div className="imageRotate">
              <Image
                src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/c3cd004d-c905-47df-e9c6-9c7cfe93b900/public"
                layout="fill"
                objectFit="contain"
                alt="Golden Skybridge"
              />
            </div>
          </div>
          <div className="right">
            <h3>Adventure Pass</h3>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Includes general admission
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Rail Rider Mountain Coaster
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Canyon Edge Course
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Sky Zipline
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Climbing Wall
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Children pricing available
              </li>
            </ul>
            <div className="priceContainer">
              <span className="dollarSign">$</span>
              <span className="amount">94</span>
              <span className="currency">CAD</span>
            </div>
            <Link href="https://bookings.banffjaspercollection.com/RKY/activities/details/1/YGE-GSB/Attraction?WebLink=8f0seDFyNaNxkm6y3D6isA%3d%3d&agencyNumber=5007167&wlid=920&lob=Golden+Skybridge#/select-ticket/book-adventure">
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
                alt="ATV Off-Road"
              />
            </div>
          </div>
          <div className="right">
            <h3>Combo This Trip and Save 10%</h3>
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
      {/* <ActivityTilesStyles style={{ marginBottom: "35rem" }}>
        <div className="tiles">
          <ActivityTile
            location="Coupon"
            title="Skydive + Skybridge Adventure Pass"
            desc="Use promo code ADVENTURE25 when booking."
            img="31818e58-2f12-404a-a739-fd1e9923e900"
            save="25"
            code="ADVENTURE25"
          />
          <ActivityTile
            location="Coupon"
            title="Raft + Skybridge Adventure Pass"
            desc="Use promo code ADVENTURE25 when booking."
            img="59a2e3e4-38d4-49de-1624-8ee154829500"
            save="25"
            code="ADVENTURE25"
          />
          <ActivityTile
            location="Coupon"
            title="ATV + Skybridge Adventure Pass"
            desc="Use promo code ADVENTURE25 when booking."
            img="d8ac2c2b-f536-40fa-033d-20f475eae700"
            save="25"
            code="ADVENTURE25"
          />
          <ActivityTile
            location="Coupon"
            title="Epic Golden Pass + Skybridge"
            desc="Use promo code SKYBRIDGE50 when booking."
            img="94a05aa6-a7c7-4ecf-fda2-0198ccce2500"
            save="50"
            code="SKYBRIDGE50"
          />
          <ActivityTile
            location="Coupon"
            title="Don't Tell Mom + Skybridge"
            desc="Use promo code SKYBRIDGE50 when booking."
            img="fe50d6fe-1f53-4d2d-bcbd-e0e012347d00"
            save="50"
            code="SKYBRIDGE50"
          />
        </div>
      </ActivityTilesStyles> */}
      <TopDividerStyles style={{ marginTop: "10rem" }}>
        <img
          src="/svg/divider-top.svg"
          width="101%"
          style={{ marginLeft: "-.2rem" }}
        />
      </TopDividerStyles>
      <TestimonialStyles>
        <p>
          “The Golden Skybridge will soon become an iconic experience for
          Canadian and international visitors alike.”
        </p>
        <div className="faceContainer">
          <img src="/svg/face.svg" width="30px" />
        </div>
        <p className="customerName">Andrea Smith, Lonely Planet</p>
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
                Summer operating hours: June to September, 9am to 9pm.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Autumn operating hours: September to October, 10am to 6pm.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Park entry is valid for the full day of purchase.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Park Entry is valid for the full day of purchase.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Golden Skybridge Iis located 1.5 hours drive west of the town of
                Banff along the Trans-Canada Highway.
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
                src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/724f0594-c063-4ee7-7847-102b6f8da600/public"
                layout="responsive"
                width="100%"
                height="auto"
                objectFit="contain"
                alt="Golden Skybridge"
              />
            </div>
          </div>
        </div>
      </AdventureSectionStyles>
      <GoogleMap location={{ lat: 51.31499, lng: -116.95826 }} zoom={15} />
      <SuggestedCombosStyles>
        <h3>Suggested Adventures</h3>
        <div className="cards">
          <SuggestedCombo
            title="Mountain Biking"
            description="Mountain biking at the Kicking Horse resort is an epic day on world-class trails, maintain and constructed by the trail crew of the resort."
            image="69256104-8b47-41b1-48a2-d88cee247100"
            url="/adventures/biking"
            internal={true}
          />
          <SuggestedCombo
            title="Golden Gondola"
            description="Take the Golden Eagle Express Gondola to the top of the resort to get those mountain views and access hiking trails."
            image="545e27e2-072f-4e13-253f-40898912f800"
            url="/adventures/goldengondola"
            internal={true}
          />
          <SuggestedCombo
            title="Valley Zipline"
            description="As you navigate the course with your adventure guide this zipline course will take you through the tree tops at high speeds."
            image="ac7427ae-cfaa-43c6-2a41-885cb7256700"
            url="/adventures/zipline"
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
