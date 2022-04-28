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
  const videoURL = "e37f7e4d920663107bc20cd23295fc9a";

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
        <title>Epic Adventures | Golden Gondola</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="heroVideo">
        <HeroVideoStyles>
          <CloudflareVideo source={videoURL} />
        </HeroVideoStyles>
      </div>
      <HeroImageSlider
        title="Golden Gondola"
        images={[
          "https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/c8b39202-3eb1-44eb-ae50-03d88beadf00/public",
        ]}
        cdn={true}
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
          <img src="/images/logos/kickinghorse.svg" />
        </div>
        <div className="pContainer">
          <h2>Experience A World Of Beauty</h2>
          <p>
            The Golden Eagle Express Gondola takes you on a climb to 7,700ft to
            a ridge overlooking three mountain ranges. You'll spot wildlife and
            may even get a glimpse of Kicking Horse Mountain Resort's resident
            grizzly bear! Once at the summit, you can explore the many ridges
            and bowls by foot providing stunning views of the Columbia Valley
            and surrounding Purcell and Rocky Mountains. This is also the home
            to Canada's highest restaurant: The Eagle's Eye. Grab a bite to eat
            and drink as you relax between your adventures.
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
              title="Golden Eagle Express"
              description="Take a ride in the gondola to ascend into the alpine mountain views."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/545e27e2-072f-4e13-253f-40898912f800/public"
            />
            <Card
              title="Trails"
              description="Explore as you have access to the alpine trails and bowls, take it easy or challenge your abilities."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/fd92af69-f374-42d4-ce1c-798139160700/public"
            />
            <Card
              title="Eagle's Eye Restaurant"
              description="The top of the gondola is home to a beautiful restaurant. Grab some food or enjoy a latte at Canada's highest restaurant."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/fc4a4352-9220-4187-85eb-904a530db600/public"
            />
            <Card
              title="Alpine Views"
              description="Take in the beautiful mountain views and air as you look over the valley."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/cf9d72af-33f6-4ed0-0706-498052f29f00/public"
            />
            <Card
              title="Boo The Bear"
              description="As you ride the gondola keep an eye out for Boo, the resident local bear at the resort."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/10f16989-dc1e-4867-bfec-da4da4a7f000/public"
            />
            <Card
              title="Mountain Biking"
              description="If just riding the gondola isn't enough, take your skills to the next level on the resort's downhill trails. More Info"
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/24c088c1-2d75-410d-b068-5e9c3cd2e600/public"
            />
            <Card
              title="Via Ferrata"
              description="Challenge yourself on this guided trip on the side of the mountain peaks. With unforgettable views this outdoor adventure you won’t forget. More Info"
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/0a7c0069-7164-4265-31b3-7a006f657400/public"
            />
            <Card
              title="Book In Advance"
              description="Slots fill fast as this experience is extremely popular, be sure to get your spot."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/19faa476-3547-45ff-f05a-eff46cbf1d00/public"
            />
          </Carousel>
        </div>
      </CardSectionStyles>

      <BookAdventureStyles marginBottom={true}>
        <h3>Our Epic Adventures</h3>
        <div className="twoCol">
          <div className="left">
            <Image
              src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/4c549f09-e8e1-40ee-9549-8106e50a5200/public"
              layout="fill"
              objectFit="contain"
              alt="Golden Gondola"
            />
          </div>
          <div className="right">
            <h3>Golden Eagle Express</h3>
            <p>
              Ascend 7,700ft. above the clouds in this express ride at the
              Kicking Horse Resort.
            </p>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Gondola ticket all-day pass
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Listed price per adult
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Family and child prices available
              </li>
            </ul>
            <div className="priceContainer">
              <span className="dollarSign">$</span>
              <span className="amount">50</span>
              <span className="currency">CAD</span>
            </div>
            <Link href="https://epicadventuregroup.rezdy.com/443871/golden-eagle-express">
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
          “Gondola ride up the mountain was amazing! We got to see Boo the bear.
          Views were incredible. Staff is amazing. Highly recommend doing this
          while in Golden.”
        </p>
        <div className="faceContainer">
          <img src="/svg/face.svg" width="30px" />
        </div>
        <p className="customerName">Becky, June 2020</p>
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
                This is an accessible gondola.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Family, child and senior pricing available.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Adventure passes available at resort.
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
                src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/54efb022-fe5d-4ac6-b505-d55d275a4300/public"
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
      <GoogleMap location={{ lat: 51.2976, lng: -117.0483 }} zoom={15} />
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
            title="Paragliding"
            description="Take off from the top of Mount 7 and soar like an eagle over the beautiful Columbia Valley and experience the Rockies like never before."
            image="ae6d4f86-3be4-4e41-cbd6-6e6566c2bc00"
            url="/adventures/paragliding"
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
