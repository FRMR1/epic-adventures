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
        <title>Epic Adventures | Canyoning</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroImageSlider
        title="Canyoning"
        images={[
          "https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/c25f231a-10f0-46e1-e79a-2ef84910fd00/public",
          "https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/b57221d8-93b3-4524-d485-744d54b35700/public",
        ]}
        cdn={true}
        needsVideo={true}
      />
      <TopDividerStyles>
        <img
          src="/svg/divider-top.svg"
          width="101%"
          style={{ marginLeft: "-.1rem" }}
        />
      </TopDividerStyles>
      <AdventureHeadingStyles>
        <div className="oneCol">
          <h2>Canyoning In The Rockies</h2>
          <p>
            Experience the wild adventures with Bow Valley Canyon Tours which
            were born out of a passion for the outdoors and a desire to share
            unparalleled, once in a lifetime canyoning experiences. Established
            in 2016, Bow Valley Canyon Tours was the first professional guiding
            company in the central Rockies to offer canyoning trips. We ensure
            you'll have the best canyoning experience possible with our
            exclusive handpicked canyon locations.
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
              title="Safety"
              description="You will be briefed and trained on all the safety procedures to complete this adventure."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/6430bd20-38cb-42e9-74f8-50914c89c700/public"
            />
            <Card
              title="Gear"
              description="Canyoning requires a climbing and water kit that will be provided for your trip."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/a4fa546b-c118-499d-2059-ca54d709cc00/public"
            />
            <Card
              title="Guided"
              description="Your accredited and experienced guides will help you along the way as you navigate the canyon in small intimate groups (2-8 people)."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/2ed6499e-2d55-40f6-2c93-09ad2c537a00/public"
            />
            <Card
              title="Experience"
              description="No experience is required before booking, all you need to bring is your sense of adventure."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/724fec58-5a12-4edb-2bd1-b6e9db0ea700/public"
            />
            <Card
              title="Adventure"
              description="This adventure is a hands-on immersive experience in the Canadian Rockies and is accessible to anyone willing to take on the challenge. "
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/b38ca2d9-dbd2-4f6e-95ca-49b634538f00/public"
            />
            <Card
              title="Book In Advance"
              description="Slots fill fast as this experience is extremely popular, be sure to get your spot."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/c97a9bd7-c626-4bed-b483-cfb6e69f4a00/public"
            />
            <Card
              title="Waiver Forms"
              description="Download and read waiver forms before your trip."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/60b1e0d2-5a35-4161-626a-4945b0c32500/public"
            />
          </Carousel>
        </div>
      </CardSectionStyles>

      <BookAdventureStyles marginBottom={true}>
        <h3>Heart Creek Canyon</h3>
        <div className="twoCol">
          <div className="left">
            <Image
              src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/499cae02-772b-4a3e-3352-a1aee6845500/public"
              layout="fill"
              objectFit="contain"
              alt="Canyoning"
            />
          </div>
          <div className="right">
            <p>
              Looking to try canyoning for the first time? Then this is the trip
              for you! An easy approach, an ideal location to learn rappelling,
              and amazing scenery all make this trip the perfect choice for your
              first canyoning experience. Heart Creek Canyon is also our closest
              trip to the townsites of Banff and Canmore.
            </p>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Duration: 4 hours (approx.)
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Minimum age 12+
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Difficulty: beginner
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Group size 2-8
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                May—October
              </li>
            </ul>
            <div className="priceContainer">
              <span className="dollarSign">$</span>
              <span className="amount">185</span>
              <span className="currency">CAD</span>
            </div>
            <Link href="https://epicadventuregroup.rezdy.com/catalog/433390/atv-off-road">
              <a target="_blank" rel="noreferrer">
                <div className="button">
                  <span>Book Now</span>
                </div>
              </a>
            </Link>
          </div>
        </div>
        <h3>Ghost Canyon</h3>
        <div className="twoCol">
          <div className="left">
            <Image
              src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/abc59838-4ece-46fb-0445-15f0c4797500/public"
              layout="fill"
              objectFit="contain"
              alt="Canyoning"
            />
          </div>
          <div className="right">
            <p>
              The Ghost is our premier canyon experience and one of the most
              secluded, wild and spectacular canyons you'll experience anywhere!
              This all-day adventure has slides, rappels and phenomenal pool
              jumps and is adventurous for veteran canyoneers and great for
              thrill-seeking beginners.
            </p>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Duration: 8 hours (approx.)
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Minimum age 14+
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Beginner/intermediate
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Group size 2-8
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                June—late September
              </li>
            </ul>
            <div className="priceContainer">
              <span className="dollarSign">$</span>
              <span className="amount">245</span>
              <span className="currency">CAD</span>
            </div>
            <Link href="https://epicadventuregroup.rezdy.com/catalog/433390/atv-off-road">
              <a target="_blank" rel="noreferrer">
                <div className="button">
                  <span>Book Now</span>
                </div>
              </a>
            </Link>
          </div>
        </div>
        <h3>Castle Canyon</h3>
        <div className="twoCol">
          <div className="left">
            <Image
              src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/d0ed441f-be15-403f-f51c-6a03d62e0300/public"
              layout="fill"
              objectFit="contain"
              alt="Canyoning"
            />
          </div>
          <div className="right">
            <p>
              If you are looking to take your canyoneering experience to the
              next level then this advanced canyon is the trip for you. Castle
              Canyon is an adrenaline trip from start to finish with five
              challenging rappels, a 12ft jump and numerous pools to swim
              through.
            </p>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Duration: 6 hours (approx.)
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Minimum age 17+
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Advanced difficulty
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Group size 2-5
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                August—October
              </li>
            </ul>
            <div className="priceContainer">
              <span className="dollarSign">$</span>
              <span className="amount">245</span>
              <span className="currency">CAD</span>
            </div>
            <Link href="https://epicadventuregroup.rezdy.com/catalog/433390/atv-off-road">
              <a target="_blank" rel="noreferrer">
                <div className="button">
                  <span>Book Now</span>
                </div>
              </a>
            </Link>
          </div>
        </div>
        <div className="combo">
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
          “Canyoning was an amazing experience, I would do it again!! Mark was
          our guide and made sure we had a safe fun experience! 😃 Hearts Creek
          canyoning was the perfect intro to canyoning.”
        </p>
        <div className="faceContainer">
          <img src="/svg/face.svg" width="30px" />
        </div>
        <p className="customerName">Suraiya S., Sept. 2021</p>
        <p>
          “What an unbelievable time we had!! We are a family of five and all of
          us cannot stop talking about how fun and challenging this adventure
          was for us! Our guide on the trip was Mark and he was excellent. Don't
          hesitate to book your trip! You will never regret it! The experience
          was a once in a lifetime adventure for each of us!! Completely
          awesome!”
        </p>
        <div className="faceContainer">
          <img src="/svg/face.svg" width="30px" />
        </div>
        <p className="customerName">Yodeler123, Aug. 2019</p>
      </TestimonialStyles>
      <BottomDividerStyles>
        <img
          src="/svg/divider-bottom.svg"
          width="101%"
          style={{ marginLeft: "-.1rem" }}
        />
      </BottomDividerStyles>
      <AdventureSectionStyles>
        <div className="whyEpic">
          <h3>Why Epic?</h3>
          <div className="container">
            <div className="item">
              <div className="icon">
                <img src="/svg/checkmark.svg" width="25" />
              </div>
              <div className="desc">
                <h4>Highest Standards</h4>
                <p>
                  All of our operators have the years of experience required to
                  give you the best quality trip and highest industry standards.
                  They know their stuff.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src="/svg/checkmark.svg" width="25" />
              </div>
              <div className="desc">
                <h4>Hype Deals</h4>
                <p>
                  With every purchase you get access to local deals and offers
                  on partnered hotels, restaurants and activities to save you
                  money and connect you with local legends.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src="/svg/checkmark.svg" width="25" />
              </div>
              <div className="desc">
                <h4>Authentically Canadian</h4>
                <p>
                  All of our adventures are operated and owned by local people
                  and families. Your money stays local and that matters.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src="/svg/checkmark.svg" width="25" />
              </div>
              <div className="desc">
                <h4>Best Value</h4>
                <p>
                  We hand pick the best value trips to save you time and
                  research. Chosen by internationally experienced guides.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src="/svg/checkmark.svg" width="25" />
              </div>
              <div className="desc">
                <h4>Experience More</h4>
                <p>
                  Our exclusive combos and adventures will save you money, time
                  and research and let you experience more on your trip through
                  the Rockies.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="twoCol">
          <div className="left">
            <h3>Additional Details</h3>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Instructors will teach you everything you need to know with no
                experience required
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                All safety and canyoning equipment will be provided.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Snacks, energy bars and water will be provided.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Please bring: Bathing suit, towel, a pair of sturdy runners or
                light hikers that can get wet (for inside the canyon, no sandals
                or open toed shoes), rain jacket or hardshell (optional if
                available), day backpack to carry up gear, extra cloths to
                change into after the trip (will remain in the vehicle),
                waterproof camera or Gopro.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Minimum age 13, depending on trip.
              </li>
            </ul>
          </div>
          <div className="right">
            <div className="imageRotate">
              <Image
                src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/fe100df3-d433-44cc-c93e-3d9c43c0b400/public"
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
            title="Stairway to Heaven"
            description="Test your nerves with a jump from an airplane from 10,000 ft and enjoy the trails, suspension bridges and treetop village of the NEW Golden Skybridge."
            bullets={[
              "Skydiving and Golden Skybridge",
              "6 hours (approx.)",
              "Must be 19 years or older",
            ]}
            image="combo7"
            price="348"
            url="https://epicadventuregroup.rezdy.com/444969/stairway-to-heaven-skydive-golden-skybridge"
          />
          <SuggestedCombo
            title="Top of the World"
            description="A day above the clouds! A jump from an airplane from 10,000 ft above the beautiful town of Golden, then scale the kicking horse mountain to 7,700 ft for panoramic views you can't forget!"
            bullets={[
              "Skydiving and Kicking Horse gondola",
              "6 hours (approx.)",
              "Must be 19 years or older",
            ]}
            price="360"
            image="combo8"
            url="https://epicadventuregroup.rezdy.com/444956/top-of-the-world-skydive-gondola-kicking-horse-resort"
          />
          <SuggestedCombo
            title="Double Trouble"
            description="Skydive for breakfast and raft the express (half day) trip in the afternoon. This day trip is an adrenaline filled memory, showcasing the best Golden has to offer!"
            bullets={[
              "Skydiving and rafting express",
              "6 hours (approx.)",
              "Must be 19 years or older",
            ]}
            price="396"
            image="combo6"
            url="https://epicadventuregroup.rezdy.com/443892/double-trouble-skydive-raft-express-combo"
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
