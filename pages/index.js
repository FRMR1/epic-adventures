import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Nav from "../components/Nav";
import ReadyToBook from "../components/ReadyToBook";
import ActivityTile from "../components/ActivityTile";
import { HeroVideoStyles } from "../components/styles/HeroVideoStyles";
import { HeroImageStyles } from "../components/styles/HeroImageStyles";
import { SectionStyles } from "../components/styles/SectionStyles";
import { TopDividerStyles } from "../components/styles/TopDividerStyles";
import { BottomDividerStyles } from "../components/styles/BottomDividerStyles";
import { ReadyToBookStyles } from "../components/styles/ReadyToBookStyles";
import { CardSectionStyles } from "../components/styles/CardSectionStyles";
import { AdventureSectionStyles } from "../components/styles/AdventureSectionStyles";
import { ActivityTilesStyles } from "../components/styles/ActivityTilesStyles";
import { FooterDividerStyles } from "../components/styles/FooterDividerStyles";
import { useMediaQuery } from "react-responsive";
import Card from "../components/Card";
import dynamic from "next/dynamic";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ComboTableStyles } from "../components/styles/ComboTableStyles";
import WhyEpic from "../components/WhyEpic";

const CloudflareVideo = dynamic(() => import("../components/CloudflareVideo"), {
  ssr: false,
});

const HeroImageSlider = dynamic(() => import("../components/HeroImageSlider"), {
  ssr: false,
});

export default function Home() {
  // Responsive
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

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

  // Cloud flarevideo URL
  const videoURL = "0e546742a408011586e2c14b6c67d5df";

  return (
    <>
      <Head>
        <title>Epic Rockies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="heroVideo">
        <HeroVideoStyles>
          <CloudflareVideo source={videoURL} />
        </HeroVideoStyles>
      </div>
      <HeroImageSlider
        title="Live Epic"
        images={["SKY1", "COMBOS5", "COMBOS1", "KHR3", "SKYBRIDGE2", "RAFT3"]}
      />
      <TopDividerStyles home={true}>
        <img
          src="/svg/divider-top.svg"
          width="101%"
          style={{ marginLeft: "-.1rem" }}
        />
      </TopDividerStyles>
      <SectionStyles>
        <h3>Experience Epic Adventures</h3>
        <p>
          When it comes to adventure and experiencing the Canadian Rockies,
          we've got you covered! Whether it's ticking off that bucket list or
          exploring the beauty of the Wild West, we will connect you with the
          best and allow you to make unique combination packages with exclusive
          savings on experiences you'll never forget. From Golden BC, Lake
          Louise, Jasper National Park, Banff National Park and Canmore we have
          selected the best to save you time, money and hassle on your
          adventure.
        </p>
      </SectionStyles>
      <BottomDividerStyles>
        <img
          src="/svg/divider-bottom.svg"
          width="101%"
          style={{ marginLeft: "-.1rem" }}
        />
      </BottomDividerStyles>

      <ActivityTilesStyles>
        <h2>Adventure Playground In The Rockies</h2>
        <div className="tiles">
          <ActivityTile
            location="Golden"
            title="Rafting Kicking Horse River"
            desc="Take on the world famous Kicking Horse River, with rapids like Man Eater and Shot Gun this river is an experience that can't be missed."
            img="c61cf00a-32f2-41c0-09fe-b2c742189700"
            url="/adventures/kickinghorseriver"
          />
          <ActivityTile
            location="Canmore"
            title="Canyoning"
            desc="Repel waterfalls, swim the canyon waters and explore the mountains a little differently, this is a trip of a lifetime."
            img="b38ca2d9-dbd2-4f6e-95ca-49b634538f00"
            url="/adventures/canyoning"
          />
          <ActivityTile
            location="Golden"
            title="Skydiving"
            desc="Feel the wind under your wings as you take on the Rockies from above the clouds at 120MPH."
            img="a45c1c16-675c-4e13-a3a5-5cee310af300"
            url="/adventures/skydiving"
          />
          <ActivityTile
            location="Banff"
            title="Caving"
            desc="Explore underground in this unique experience inside the Bow Valley mountains. This trip will expand your relationship with the mountains and local habitat."
            img="66ee2fee-ee8a-4ac0-1454-3ab1da1e7100"
            url="/adventures/caving"
          />
          <ActivityTile
            location="Banff"
            title="Heli Flight"
            desc="Get the best seat above the mountains, take a helicopter over the Three Sisters mountain tops and experience the Rockies in style."
            img="c5ed939e-308e-4c19-58a7-cb8e744d6b00"
            url="/adventures/heliflight"
          />
          <ActivityTile
            location="Golden"
            title="ATV Off-Road"
            desc="Take on the Backcountry of the Columbia Valley on your own ATV and take the road less travelled."
            img="bdf4b029-7c13-4887-724a-b0cf7db54700"
            url="/adventures/atv"
          />
          {isMobile && (
            <>
              <ActivityTile
                location="Canadian Rockies"
                title="Summer Combos"
                desc="Experience more and save with these exclusive combos."
                img="ea465914-9570-4ebe-60d1-50dd6fda7d00"
                url="/combos"
              />
              <ActivityTile
                location="Canadian Rockies"
                title="Winter Combos"
                desc="Stay tuned as we work on delivering you the best winter experiences for upcoming season."
                img="ea465914-9570-4ebe-60d1-50dd6fda7d00"
                url="/combos"
              />
            </>
          )}
          {!isMobile && (
            <>
              <ActivityTile
                location="Banff"
                title="Via Ferrata Mt. Norquay"
                desc="Take on Mount Norquay and get the best views of the town of
            Banff and the bow valley, challenge yourself."
                img="4b009846-f3cf-4c1f-e795-896e5c2b1000"
                url="/adventures/vianorquay"
              />
              <ActivityTile
                location="Golden"
                title="Valley Zipline"
                desc="As you navigate the course with your adventure guide this zipline course will take you through the tree tops at high speeds."
                img="ac7427ae-cfaa-43c6-2a41-885cb7256700"
                url="/adventures/zipline"
              />
              <ActivityTile
                location="Golden"
                title="Mountain Biking"
                desc="Mountain biking at the Kicking Horse resort is an epic day on world-class trails, maintain and constructed by the trail crew of the resort."
                img="69256104-8b47-41b1-48a2-d88cee247100"
                url="/adventures/biking"
              />
              <ActivityTile
                location="Golden"
                title="Via Ferrata Kicking Horse"
                desc="Challenge yourself on this guided trip on the side of the mountain peaks. With unforgettable views this outdoor adventure you won't forget."
                img="11e9dbeb-b46d-4322-88e9-9172f64a2800"
                url="/adventures/viakickinghorse"
              />
              <ActivityTile
                location="Golden"
                title="Scenic Flight"
                desc="Charter your own plane to glaciers and above the mountains for some serious views of the wild back country."
                img="e3be2b9b-00f6-48b3-7c3f-61f632f2a200"
                url="/adventures/scenicflight"
              />
              <ActivityTile
                location="Golden"
                title="Golden Skybridge"
                desc="The new Golden Skybridge, home to Canada's highest suspension bridges, zipline, giant swing and treetop adventure park."
                img="e4f24150-dfa8-4425-9ece-b3c0878e1a00"
                url="/adventures/skybridge"
              />
              <ActivityTile
                location="Banff"
                title="Banff Gondola"
                desc="Above the clouds and town of Banff, the gondola will give access to a bird's eye view as you breathe in the fresh mountain air, this is a must do while on your visit."
                img="f9e93463-ee8e-4e91-9806-9187265d2d00"
                url="/adventures/banffgondola"
              />
              <ActivityTile
                location="Canadian Rockies"
                title="Summer Combos"
                desc="Experience more and save with these exclusive combos."
                img="ea465914-9570-4ebe-60d1-50dd6fda7d00"
                url="/combos"
              />
              <ActivityTile
                location="Canadian Rockies"
                title="Winter Combos"
                desc="Stay tuned as we work on delivering you the best winter experiences for upcoming season."
                img="ea465914-9570-4ebe-60d1-50dd6fda7d00"
                url="/combos"
              />
              <div className="hidden-flex-item" />
            </>
          )}
        </div>
        <Link href="/adventures">
          <div className="button viewAll">
            <span>View All</span>
          </div>
        </Link>
        <div className="marginBottom" />
      </ActivityTilesStyles>
      <WhyEpic marginBottom={true} />
      <CardSectionStyles>
        <h3>The Canadian Rockies</h3>
        <div className="cards">
          <Carousel
            responsive={responsive}
            infinite={true}
            swipeable={true}
            draggable={true}
            containerClass="padding-100-px"
          >
            <Card
              title="Golden"
              description="This rugged mountain town is home to some of the most unique and adventurous activities in the Rockies."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/aa51019f-fff9-4f19-e298-a8762e747700/public"
              a="/destinations/golden"
            />
            <Card
              title="Jasper"
              description="At the heart of the Canadian Rockies, Jasper National Park is the ultimate mountain escape."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/2d3202e9-d19a-4c57-ad70-68dec4fcd600/public"
              a="/destinations/jasper"
            />
            <Card
              title="Canmore"
              description="You will get a chance to practice everything you need with the instruction of your experienced guide."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/8be23e5e-7053-455f-9aad-446ed873f200/public"
              a="/destinations/canmore"
            />
            <Card
              title="Lake Louise"
              description="Take in the views on mother nature's highway. The Kicking Horse Canyon and beautiful river views is half the fun."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/0943d0b7-a35f-45aa-ed5c-4256bc999e00/public"
              a="/destinations/lakelouise"
            />
            <Card
              title="Banff"
              description="Canada's premier and most historic national park, full of wildlife and mountain scapes, this place must be experienced."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/50e00f0d-f030-4c8c-ef45-389cb524e900/public"
              a="/destinations/banffnationalpark"
            />
          </Carousel>
        </div>
      </CardSectionStyles>
      <ComboTableStyles>
        <h3>Experience More With Epic</h3>
        <p>
          We have teamed up with Canada's most epic experiences and put them
          together to save you time, money and hassle. Take a look at our
          exciting combos and take advantage of the exclusive deals.{" "}
        </p>
        <div className="tableContainer">
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th className="combo">
                    <div className="cell"></div>
                  </th>
                  <th>
                    <div className="cell">Rafting</div>
                  </th>
                  <th>
                    <div className="cell">Skydiving</div>
                  </th>
                  <th>
                    <div className="cell">ATV</div>
                  </th>
                  <th>
                    <div className="cell">Via Ferrata</div>
                  </th>
                  <th>
                    <div className="cell">Canyoning</div>
                  </th>
                  <th>
                    <div className="cell">Caving</div>
                  </th>
                  <th>
                    <div className="cell">Zipline</div>
                  </th>
                  <th>
                    <div className="cell">Skybridge</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="combo">
                    <div className="cell">Epic Golden Pass</div>
                  </th>
                  <td>
                    <div className="cell">
                      <img src="/svg/rafting.svg" width="35" />
                    </div>
                  </td>
                  <td>
                    <div className="cell">
                      <img src="/svg/skydiving.svg" width="30" />
                    </div>
                  </td>
                  <td>
                    <div className="cell">
                      <img src="/svg/atv.svg" width="40" />
                    </div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                </tr>
                <tr>
                  <th className="combo">
                    <div className="cell">Golden Ultimate</div>
                  </th>
                  <td>
                    <div className="cell">
                      <img src="/svg/rafting.svg" width="35" />
                    </div>
                  </td>
                  <td>
                    <div className="cell">
                      <img src="/svg/skydiving.svg" width="30" />
                    </div>
                  </td>
                  <td>
                    <div className="cell">
                      <img src="/svg/atv.svg" width="40" />
                    </div>
                  </td>
                  <td>
                    <div className="cell">
                      <img src="/svg/mountain.svg" width="35" />
                    </div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                </tr>
                <tr>
                  <th className="combo">
                    <div className="cell">Don't Tell Mom</div>
                  </th>
                  <td>
                    <div className="cell">
                      <img src="/svg/rafting.svg" width="35" />
                    </div>
                  </td>
                  <td>
                    <div className="cell">
                      <img src="/svg/skydiving.svg" width="30" />
                    </div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                </tr>
                <tr>
                  <th className="combo">
                    <div className="cell">Mud Express</div>
                  </th>
                  <td>
                    <div className="cell">
                      <img src="/svg/rafting.svg" width="35" />
                    </div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell">
                      <img src="/svg/atv.svg" width="40" />
                    </div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                </tr>
                <tr>
                  <th className="combo">
                    <div className="cell">Dirt Dive</div>
                  </th>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell">
                      <img src="/svg/skydiving.svg" width="30" />
                    </div>
                  </td>
                  <td>
                    <div className="cell">
                      <img src="/svg/atv.svg" width="40" />
                    </div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                </tr>
                <tr>
                  <th className="combo">
                    <div className="cell">Double Trouble</div>
                  </th>
                  <td>
                    <div className="cell">
                      <img src="/svg/rafting.svg" width="35" />
                    </div>
                  </td>
                  <td>
                    <div className="cell">
                      <img src="/svg/skydiving.svg" width="30" />
                    </div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                </tr>
                <tr>
                  <th className="combo">
                    <div className="cell">Banff Ultimate Adventurer</div>
                  </th>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell">
                      <img src="/svg/mountain.svg" width="35" />
                    </div>
                  </td>
                  <td>
                    <div className="cell">
                      <img src="/svg/mountain.svg" width="35" />
                    </div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                </tr>
                <tr>
                  <th className="combo">
                    <div className="cell">Banff Epic Adventurer</div>
                  </th>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell">
                      <img src="/svg/mountain.svg" width="35" />
                    </div>
                  </td>
                  <td>
                    <div className="cell">
                      <img src="/svg/mountain.svg" width="35" />
                    </div>
                  </td>
                  <td>
                    <div className="cell">
                      <img src="/svg/mountain.svg" width="35" />
                    </div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                </tr>
                <tr>
                  <th className="combo">
                    <div className="cell">Under and Over</div>
                  </th>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell">
                      <img src="/svg/skydiving.svg" width="30" />
                    </div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell">
                      <img src="/svg/mountain.svg" width="35" />
                    </div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                </tr>
                <tr>
                  <th className="combo">
                    <div className="cell">Rock Hunter</div>
                  </th>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell">
                      <img src="/svg/mountain.svg" width="35" />
                    </div>
                  </td>
                  <td>
                    <div className="cell">
                      <img src="/svg/mountain.svg" width="35" />
                    </div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                </tr>
                <tr>
                  <th className="combo">
                    <div className="cell">Rockies Explorer</div>
                  </th>
                  <td>
                    <div className="cell">
                      <img src="/svg/rafting.svg" width="35" />
                    </div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell">
                      <img src="/svg/mountain.svg" width="35" />
                    </div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                </tr>
                <tr>
                  <th className="combo">
                    <div className="cell">Poseidon</div>
                  </th>
                  <td>
                    <div className="cell">
                      <img src="/svg/rafting.svg" width="35" />
                    </div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell">
                      <img src="/svg/mountain.svg" width="35" />
                    </div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                </tr>
                <tr>
                  <th className="combo">
                    <div className="cell">Mountaineer</div>
                  </th>
                  <td>
                    <div className="cell">
                      <img src="/svg/rafting.svg" width="35" />
                    </div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell">
                      <img src="/svg/mountain.svg" width="35" />
                    </div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                </tr>
                <tr>
                  <th className="combo">
                    <div className="cell">Zeus</div>
                  </th>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell">
                      <img src="/svg/skydiving.svg" width="30" />
                    </div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell">
                      <img src="/svg/mountain.svg" width="35" />
                    </div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                </tr>
                <tr>
                  <th className="combo">
                    <div className="cell">Thrill Seeker</div>
                  </th>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell">
                      <img src="/svg/skydiving.svg" width="30" />
                    </div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell">
                      <img src="/svg/mountain.svg" width="35" />
                    </div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                </tr>
                <tr>
                  <th className="combo">
                    <div className="cell">Family Epic Pass</div>
                  </th>
                  <td>
                    <div className="cell">
                      <img src="/svg/rafting.svg" width="35" />
                    </div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td></td>
                  <td>
                    <div className="cell"></div>
                  </td>
                  <td>
                    <div className="cell">
                      <img src="/svg/zipline.svg" width="35" />
                    </div>
                  </td>
                  <td>
                    <div className="cell">
                      <img src="/svg/sightseeing.svg" width="35" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </ComboTableStyles>
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
}
