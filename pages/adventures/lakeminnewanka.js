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
  const videoURL = "c288eac10cb9c3b9e946692cc2b9a953";

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
        <title>Epic Adventures | Lake Minnewanka</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="heroVideo">
        <HeroVideoStyles>
          <CloudflareVideo source={videoURL} />
        </HeroVideoStyles>
      </div>
      <HeroImageSlider
        title="Lake Minnewanka"
        images={[
          "https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/45cadfc0-0235-4313-1afe-f96482b7c000/public",
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
          <img src="/images/logos/minnewanka.svg" />
        </div>
        <div className="pContainer">
          <h2>Lake Minnewanka</h2>
          <p>
            Watch for wildlife, feel the fresh air, and get adventurous on
            Banff's largest lake. Our heated, covered boats mean you can explore
            in any weather. Join us every afternoon to sample some of the best
            local brews on our Beer Voyage cruise. Plus, stop by the Black
            Anchor Snack Shop for a picnic lunch before or after your cruise to
            make a day out of it. It just feels like summer out here! You will
            experience the towering peaks rise vertically from the emerald
            water's edge and on the shore amongst the forested pine and spruce,
            and for some, big horn sheep, bald eagles, ospreys, deer and even
            the occasional bear may be discovered. Along the way, our
            experienced captains who are most familiar with the history,
            geology, animals, park policy and native involvement in our area,
            will provide informative and entertaining commentary throughout the
            journey.
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
              title="Cruise"
              description="Relax and take in the informative guided ride across the crystal-clear waters of Lake Minnewanka."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/bb5287fc-eed9-4f37-ab95-747de4151a00/public"
            />
            <Card
              title="Boat"
              description="The classic lake cruiser will glide across the water and showcase some of Banff's best views."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/684d294c-4d1d-4430-6482-c768923d3400/public"
            />
            <Card
              title="Restaurants"
              description="Stop at the Black Anchor restaurant located on the lakes edge for a snack or a picnic lunch."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/eb03d7db-45d4-487c-401a-0aed319c1000/public"
            />
            <Card
              title="Beer Cruise"
              description="Enjoy local craft beer on this engaging interpretive tour to help you connect to the stunning Rocky Mountains at dusk."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/ee975dc9-41a1-4f88-85af-fa5640437900/public"
            />
            <Card
              title="Rent"
              description="If you're feeling a little more adventurous you can rent boats and canoes at the docks."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/8cb71f0b-8c3c-4474-8720-808f5be0dc00/public"
            />
            <Card
              title="Banff National Park"
              description="Located in Banff National Park, this cruise and a great escape of the town of Banff, located just 15 minute's drive from down-town."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/863ccd66-7986-4dc8-f5f6-152445cc1d00/public"
            />
          </Carousel>
        </div>
      </CardSectionStyles>

      <BookAdventureStyles marginBottom={true}>
        <h3>Our Epic Adventures</h3>
        <div className="twoCol">
          <div className="left">
            <Image
              src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/3e682879-757f-46c7-b66f-f16b03f16100/public"
              layout="fill"
              objectFit="contain"
              alt="Lake Minnewanka"
            />
          </div>
          <div className="right">
            <h3>Lake Minnewanka Classic Cruise</h3>
            <p>
              Take the Classic Lake Minnewanka Cruise and enjoy the beauty of
              Banff National Park by water.
            </p>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Duration: 1 hour (approx.)
              </li>
            </ul>
            <div className="priceContainer">
              <span className="dollarSign">$</span>
              <span className="amount">TBD</span>
              <span className="currency">CAD</span>
            </div>
            <Link href="https://epicadventuregroup.rezdy.com/485308/lake-miniwanka-classic-cruise">
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
              src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/738175d1-cc2d-46ed-83cf-6483cef19a00/public"
              layout="fill"
              objectFit="contain"
              alt="Lake Minnewanka"
            />
          </div>
          <div className="right">
            <h3>Beer Voyage Cruise</h3>
            <p>
              Join the Lake Minnewanka Cruise for an afternoon of boutique beers
              and interpretive cruise.
            </p>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Duration: 1.5 hours (approx.)
              </li>
            </ul>
            <div className="priceContainer">
              <span className="dollarSign">$</span>
              <span className="amount">TBD</span>
              <span className="currency">CAD</span>
            </div>
            <Link href="https://epicadventuregroup.rezdy.com/485311/lake-miniwanka-beer-cruise">
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
          “We went on the 5 pm cruise and the views were beautiful. The stories
          were fun to hear from the guide. The water was beautiful and was
          another way to see the breathtaking scenery vs having to hike. We had
          done two very long hikes b2b so this was an excellent way to see the
          area. We were able to go a far distance down the lake and that was
          cool!”
        </p>
        <div className="faceContainer">
          <img src="/svg/face.svg" width="30px" />
        </div>
        <p className="customerName">Kerwebb, Oct. 2022</p>
        <p>
          “Wonderful boat tour on the lake in a mountain setting. The tour guide
          was excellent and very knowledgeable about the lake and region. Boat
          captain was excellent and very safe.”
        </p>
        <div className="faceContainer">
          <img src="/svg/face.svg" width="30px" />
        </div>
        <p className="customerName">279raphaelt, Sept. 2021</p>
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
                Please bring appropriate clothing and footwear for the weather.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Ages 5 and under ride for free but require a ticket.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Must be 18+ years old with government ID for beer cruise.
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
                src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/51832543-4ef8-4747-54ba-8d9fa847f800/public"
                layout="responsive"
                width="100%"
                height="auto"
                objectFit="contain"
                alt="Lake Minnewanka"
              />
            </div>
          </div>
        </div>
      </AdventureSectionStyles>
      <GoogleMap location={{ lat: 51.226673, lng: -115.504311 }} zoom={15} />
      <SuggestedCombosStyles>
        <h3>Suggested Adventures</h3>
        <div className="cards">
          <SuggestedCombo
            title="Heli Flight"
            description="Get the best seat above the mountains, take a helicopter over the Three Sisters mountain tops and experience the Rockies in style."
            image="c5ed939e-308e-4c19-58a7-cb8e744d6b00"
            url="/adventures/heliflight"
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
            title="Banff Gondola"
            description="Above the clouds and town of Banff, the gondola will give access to a bird's eye view as you breathe in the fresh mountain air, this is a must do while on your visit."
            image="f9e93463-ee8e-4e91-9806-9187265d2d00"
            url="/adventures/banffgondola"
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
