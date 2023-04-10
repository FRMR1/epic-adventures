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
import { TestimonialStyles } from "../components/styles/TestimonialStyles";

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

  const maps = {
    all: {
      breakpoint: { max: 9999, min: 0 },
      items: 1,
    },
  };

  const quotes = {
    all: {
      breakpoint: { max: 9999, min: 0 },
      items: 1,
    },
  };

  // Cloud flarevideo URL
  const videoURL = "420f3ea24aca650b853b0706b06724ae";

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
          style={{ marginLeft: "-.2rem" }}
        />
      </TopDividerStyles>
      <SectionStyles>
        <Carousel
          responsive={maps}
          infinite={true}
          swipeable={true}
          draggable={true}
        >
          <div className="mapCarousel">
            <div style={{ position: "relative" }}>
              <img
                src="/images/locationsmap.png"
                style={{ width: "100%", height: "auto" }}
              />
              <a href="/destinations/golden">
                <div
                  style={{
                    position: "absolute",
                    left: "13.5%",
                    top: "72.5%",
                    width: "9.5%",
                    height: "5%",
                  }}
                />
              </a>
              <a href="/destinations/jasper">
                <div
                  style={{
                    position: "absolute",
                    left: "14%",
                    top: "30%",
                    width: "8%",
                    height: "5%",
                  }}
                />
              </a>
              <a href="/destinations/banff">
                <div
                  style={{
                    position: "absolute",
                    left: "32.5%",
                    top: "74.5%",
                    width: "8%",
                    height: "5%",
                  }}
                />
              </a>
              <a href="/destinations/lakelouise">
                <div
                  style={{
                    position: "absolute",
                    left: "28%",
                    top: "68.5%",
                    width: "12%",
                    height: "5%",
                  }}
                />
              </a>
              <a href="/destinations/canmore">
                <div
                  style={{
                    position: "absolute",
                    left: "36%",
                    top: "79%",
                    width: "10%",
                    height: "6%",
                  }}
                />
              </a>
            </div>
          </div>
          <div className="mapCarousel">
            <div style={{ position: "relative" }}>
              <img
                src="/images/banffmap.png"
                style={{ width: "100%", height: "auto" }}
              />
              <div
                className="tooltip"
                style={{
                  position: "absolute",
                  left: "23.25%",
                  top: "28.5%",
                  width: "4%",
                  height: "8%",
                }}
              >
                <span className="tooltipText">Via Ferrata Mt. Norquay</span>
              </div>
              <div
                className="tooltip"
                style={{
                  position: "absolute",
                  left: "32.5%",
                  top: "26.5%",
                  width: "5%",
                  height: "8%",
                }}
              >
                <span className="tooltipText">Lake Minnewanka Cruise</span>
              </div>
              <div
                className="tooltip"
                style={{
                  position: "absolute",
                  left: "29.5%",
                  top: "49.5%",
                  width: "5%",
                  height: "9%",
                }}
              >
                <span className="tooltipText">Banff Gondola</span>
              </div>
              <div
                className="tooltip"
                style={{
                  position: "absolute",
                  left: "40.75%",
                  top: "63.5%",
                  width: "4%",
                  height: "8%",
                }}
              >
                <span className="tooltipText">Canyoning</span>
              </div>
              <div
                className="tooltip"
                style={{
                  position: "absolute",
                  left: "47.75%",
                  top: "64%",
                  width: "4%",
                  height: "8%",
                }}
              >
                <span className="tooltipText">Caving</span>
              </div>
              <div
                className="tooltip"
                style={{
                  position: "absolute",
                  left: "43.75%",
                  top: "69%",
                  width: "4%",
                  height: "8%",
                }}
              >
                <span className="tooltipText">Heli Flight</span>
              </div>
              <div
                className="tooltip"
                style={{
                  position: "absolute",
                  left: "81.5%",
                  top: "48%",
                  width: "4%",
                  height: "8%",
                }}
              >
                <span className="tooltipText">Rafting Kananaskis River</span>
              </div>
            </div>
          </div>
          <div className="mapCarousel">
            <div style={{ position: "relative" }}>
              <img className="mapImg" src="/images/goldenmap.png" />
              <div
                className="tooltip"
                style={{
                  position: "absolute",
                  left: "2%",
                  top: "39.5%",
                  width: "4%",
                  height: "8%",
                }}
              >
                <span className="tooltipText">Golden Gondola</span>
              </div>
              <div
                className="tooltip"
                style={{
                  position: "absolute",
                  left: "7%",
                  top: "45.5%",
                  width: "4%",
                  height: "8%",
                }}
              >
                <span className="tooltipText">Via Ferrata Kicking Horse</span>
              </div>
              <div
                className="tooltip"
                style={{
                  position: "absolute",
                  left: "2%",
                  top: "48.5%",
                  width: "4%",
                  height: "8%",
                }}
              >
                <span className="tooltipText">Mountain Biking</span>
              </div>
              <div
                className="tooltip"
                style={{
                  position: "absolute",
                  left: "43.25%",
                  top: "44.5%",
                  width: "4%",
                  height: "9%",
                }}
              >
                <span className="tooltipText">Skydiving</span>
              </div>
              <div
                className="tooltip"
                style={{
                  position: "absolute",
                  left: "45.25%",
                  top: "53.5%",
                  width: "4%",
                  height: "9%",
                }}
              >
                <span className="tooltipText">ATV Off-Road</span>
              </div>
              <div
                className="tooltip"
                style={{
                  position: "absolute",
                  left: "47.25%",
                  top: "61.5%",
                  width: "4%",
                  height: "9%",
                }}
              >
                <span className="tooltipText">Scenic Flight</span>
              </div>
              <div
                className="tooltip"
                style={{
                  position: "absolute",
                  left: "57.25%",
                  top: "15.5%",
                  width: "4%",
                  height: "8%",
                }}
              >
                <span className="tooltipText">Golden Skybridge</span>
              </div>
              <div
                className="tooltip"
                style={{
                  position: "absolute",
                  left: "64.25%",
                  top: "34.5%",
                  width: "4%",
                  height: "8%",
                }}
              >
                <span className="tooltipText">Rafting Kicking Horse River</span>
              </div>
              <div
                className="tooltip"
                style={{
                  position: "absolute",
                  left: "73.25%",
                  top: "86.5%",
                  width: "5%",
                  height: "9%",
                }}
              >
                <span className="tooltipText">Valley Zipline</span>
              </div>
              <div
                className="tooltip"
                style={{
                  position: "absolute",
                  left: "92.75%",
                  top: "86%",
                  width: "4%",
                  height: "9%",
                }}
              >
                <span className="tooltipText">Paragliding</span>
              </div>
            </div>
          </div>
          <div className="mapCarousel">
            <div style={{ position: "relative" }}>
              <img className="mapImg" src="/images/jaspermap.png" />
              <div
                className="tooltip"
                style={{
                  position: "absolute",
                  left: "63.75%",
                  top: "80%",
                  width: "4%",
                  height: "9%",
                }}
              >
                <span className="tooltipText">Columbia Icefield</span>
              </div>
              <div
                className="tooltip"
                style={{
                  position: "absolute",
                  left: "58%",
                  top: "69%",
                  width: "4%",
                  height: "9%",
                }}
              >
                <span className="tooltipText">Skywalk</span>
              </div>
              <div
                className="tooltip"
                style={{
                  position: "absolute",
                  left: "40%",
                  top: "36%",
                  width: "4%",
                  height: "9%",
                }}
              >
                <span className="tooltipText">Jasper Skytram</span>
              </div>
              <div
                className="tooltip"
                style={{
                  position: "absolute",
                  left: "47%",
                  top: "26%",
                  width: "5%",
                  height: "7%",
                }}
              >
                <span className="tooltipText">Maligne Lake Cruise</span>
              </div>
            </div>
          </div>
        </Carousel>
      </SectionStyles>
      <BottomDividerStyles>
        <img
          src="/svg/divider-bottom.svg"
          width="101%"
          style={{ marginLeft: "-.2rem" }}
        />
      </BottomDividerStyles>
      <ActivityTilesStyles>
        <h2>Adventure Playground In The Rockies</h2>
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
        <div className="tiles">
          <ActivityTile
            location="Golden"
            title="Rafting Kicking Horse River"
            desc="Take on the world famous Kicking Horse River, with rapids like Man Eater and Shot Gun this river is an experience that can't be missed."
            img="c61cf00a-32f2-41c0-09fe-b2c742189700"
            url="/adventures/kickinghorseriver"
            price="99"
          />
          <ActivityTile
            location="Golden"
            title="Skydiving"
            desc="Feel the wind under your wings as you take on the Rockies from above the clouds at 120MPH."
            img="a45c1c16-675c-4e13-a3a5-5cee310af300"
            url="/adventures/skydiving"
            price="349"
          />
          <ActivityTile
            location="Golden"
            title="ATV Off-Road"
            desc="Take on the Backcountry of the Columbia Valley on your own ATV and take the road less travelled."
            img="bdf4b029-7c13-4887-724a-b0cf7db54700"
            url="/adventures/atv"
            price="229"
          />
          <ActivityTile
            location="Golden"
            title="Golden Skybridge"
            desc="The new Golden Skybridge, home to Canada's highest suspension bridges, zipline, giant swing and treetop adventure park."
            img="e4f24150-dfa8-4425-9ece-b3c0878e1a00"
            url="/adventures/skybridge"
            price="36"
          />
          <ActivityTile
            location="Golden"
            title="Scenic Flight"
            desc="Charter your own plane to glaciers and above the mountains for some serious views of the wild back country."
            img="e3be2b9b-00f6-48b3-7c3f-61f632f2a200"
            url="/adventures/scenicflight"
            price="250"
          />
          <ActivityTile
            location="Golden"
            title="Via Ferrata Kicking Horse"
            desc="Challenge yourself on this guided trip on the side of the mountain peaks. With unforgettable views this outdoor adventure you won't forget."
            img="11e9dbeb-b46d-4322-88e9-9172f64a2800"
            url="/adventures/viakickinghorse"
            price="155"
          />
          <ActivityTile
            location="Canmore"
            title="Canyoning"
            desc="Repel waterfalls, swim the canyon waters and explore the mountains a little differently, this is a trip of a lifetime."
            img="b38ca2d9-dbd2-4f6e-95ca-49b634538f00"
            url="/adventures/canyoning"
            price="195"
          />
          <ActivityTile
            location="Banff"
            title="Heli Flight"
            desc="Get the best seat above the mountains, take a helicopter over the Three Sisters mountain tops and experience the Rockies in style."
            img="c5ed939e-308e-4c19-58a7-cb8e744d6b00"
            url="/adventures/heliflight"
            price="290"
          />
          <ActivityTile
            location="Banff"
            title="Caving"
            desc="Explore underground in this unique experience inside the Bow Valley mountains. This trip will expand your relationship with the mountains and local habitat."
            img="66ee2fee-ee8a-4ac0-1454-3ab1da1e7100"
            url="/adventures/caving"
            price="135"
          />
        </div>
        <Link href="/adventures">
          <div className="button viewAll">
            <span>View All</span>
          </div>
        </Link>
        <div className="marginBottom" />
      </ActivityTilesStyles>
      <ActivityTilesStyles>
        <h2>Experience More With Epic</h2>
        <p>
          We have teamed up with the Rockies' most epic experiences and put them
          together to save you time, money and hassle. Take a look at our
          exciting combos and take advantage of the exclusive deals. Book online
          today and save.
        </p>
        <div className="tiles">
          <ActivityTile
            location="Golden"
            title="Epic Golden Pass"
            desc="Rafting Kicking Horse river full day, skydiving, ATV half day."
            img="595ec27a-72a8-45c6-99a4-d7c50fead200"
            url="https://epicadventuregroup.rezdy.com/443894/combo-epic-golden-pass-raft-skydive-atv-multi-day"
            rrsp="757"
            price="707"
          />
          <ActivityTile
            location="Golden"
            title="Golden Ultimate"
            desc="Rafting full day Kicking Horse river, skydiving, ATV half-day, via ferrata (Discovery route Kicking Horse)."
            img="379df31d-2ab4-495a-21d3-cce6e7585100"
            url="https://epicadventuregroup.rezdy.com/485632/combo-golden-ultimate-raft-skydive-atv-via-ferrata-multi-day"
            rrsp="912"
            price="841"
          />
          <ActivityTile
            location="Golden"
            title="Don't Tell Mom"
            desc="Full day rafting Kicking Horse river, skydiving."
            img="853d630c-43d8-484c-23fb-8bf1b9b23a00"
            url="https://epicadventuregroup.rezdy.com/444202/combo-don-t-tell-mom-raft-full-day-skydive"
            rrsp="528"
            price="497"
          />
          <ActivityTile
            location="Golden"
            title="Mud Express"
            desc="Half-day ATV trip, rafting Kicking Horse river PM."
            img="c20d505c-ac97-4e19-f2d0-12a55afce900"
            url="https://epicadventuregroup.rezdy.com/443893/combo-mud-express-atv-raft-express"
            rrsp="328"
            price="302"
          />
          <ActivityTile
            location="Golden"
            title="Dirt Dive"
            desc="Half-day ATV trip, skydiving."
            img="450331df-2fcb-4401-853a-4bf6bbd10f00"
            url="https://epicadventuregroup.rezdy.com/443897/combo-dirt-dive-atv-skydive"
            rrsp="578"
            price="543"
          />
          <ActivityTile
            location="Golden"
            title="Double Trouble"
            desc="Skydiving, rafting Kicking Horse river PM."
            img="05380fa9-b6cb-4696-9e23-e1dc6ba55000"
            url="https://epicadventuregroup.rezdy.com/443892/combo-double-trouble-skydive-raft-express"
            rrsp="448"
            price="423"
          />
          <ActivityTile
            location="Golden"
            title="Family Epic Pass"
            desc="Family rafting Kicking Horse, Golden Skyridbe Adventure Pass."
            img="29684fe5-810d-4e6e-01a3-0157e64ff800"
            url="https://epicadventuregroup.rezdy.com/485655/combo-family-epic-pass-valley-zipline-tour-family-rafting-golden-skybridge-multi-day"
            rrsp="160"
            price="151"
          />
        </div>
      </ActivityTilesStyles>
      <ActivityTilesStyles>
        <h2>Sightseeing and Adventure Add-ons</h2>
        <p>
          Add any of these activities to any of our solo adventures or existing
          combos and save. Use the appropriate promo code in our checkout to add
          these Epic memories to your next adventure.
        </p>
        <div className="tiles">
          <ActivityTile
            location="Coupon"
            title="Skybridge Park Entry"
            desc="Use promo code SKYBRIDGE50 when booking and save 50% on the Skybridge."
            img="a4d0b160-416f-4188-70b1-54ef7792ad00"
            save="50"
            code="SKYBRIDGE50"
          />
          <ActivityTile
            location="Coupon"
            title="Skybridge Adventure Pass"
            desc="Use promo code ADVENTURE25 when booking and save 25% on the Skybridge Adventure Pass."
            img="724f0594-c063-4ee7-7847-102b6f8da600"
            save="25"
            code="ADVENUTRE25"
          />
          <ActivityTile
            location="Coupon"
            title="Scenic Flight"
            desc="Use promo code FLIGHT10 when booking and save 10% on Scenic Flight."
            img="cc253092-6d49-4054-60d8-961ff3c9d600"
            save="10"
            code="FLIGHT10"
          />
          <ActivityTile
            location="Coupon"
            title="Golden Eagle Express"
            desc="Use promo code GONDOLA10 when booking and save 10% on the Golden Eagle Express."
            img="545e27e2-072f-4e13-253f-40898912f800"
            save="10"
            code="GONDOLA10"
          />
          <ActivityTile
            location="Coupon"
            title="Banff Gondola"
            desc="Use promo code GONDOLA10 when booking and save 10% on the Banff Gondola."
            img="1fda534c-321e-4ba7-0eab-2d28446cae00"
            save="10"
            code="GONDOLA10"
          />
          <ActivityTile
            location="Coupon"
            title="Lake Louise Gondola"
            desc="Use promo code GONDOLA10 when booking and save 10% on the Lake Louise Gondola."
            img="51ceaae5-19a4-49ba-345e-7fcca6c35d00"
            save="10"
            code="GONDOLA10"
          />
        </div>
      </ActivityTilesStyles>
      <ActivityTilesStyles>
        <h2>Hot Combo Ideas This Summer</h2>
        <p>
          Some Epic hot combo ideas for this summer to keep you cool and doing
          it all. Add promo code to check out when finalising booking.
        </p>
        <div className="tiles">
          <ActivityTile
            location="Coupon"
            title="Skydive + Skybridge Adventure Pass"
            desc="Use promo code ADVENTURE25 when booking and save 25% on the Skybridge Adventure Pass."
            img="31818e58-2f12-404a-a739-fd1e9923e900"
            save="25"
            code="ADVENTURE25"
          />
          <ActivityTile
            location="Coupon"
            title="Raft + Skybridge Adventure Pass"
            desc="Use promo code ADVENTURE25 when booking and save 25% on the Skybridge Adventure Pass."
            img="59a2e3e4-38d4-49de-1624-8ee154829500"
            save="25"
            code="ADVENTURE25"
          />
          <ActivityTile
            location="Coupon"
            title="ATV + Skybridge Adventure Pass"
            desc="Use promo code ADVENTURE25 when booking and save 25% on the Skybridge Adventure Pass."
            img="d8ac2c2b-f536-40fa-033d-20f475eae700"
            save="25"
            code="ADVENTURE25"
          />
          <ActivityTile
            location="Coupon"
            title="Epic Golden Pass + Skybridge"
            desc="Use promo code SKYBRIDGE50 when booking and save 50% on the Skybridge."
            img="94a05aa6-a7c7-4ecf-fda2-0198ccce2500"
            save="50"
            code="SKYBRIDGE50"
          />
          <ActivityTile
            location="Coupon"
            title="Don't Tell Mom + Skybridge"
            desc="Use promo code SKYBRIDGE50 when booking and save 50% on the Skybridge."
            img="fe50d6fe-1f53-4d2d-bcbd-e0e012347d00"
            save="50"
            code="SKYBRIDGE50"
          />
        </div>
      </ActivityTilesStyles>
      <ComboTableStyles>
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
      <TopDividerStyles>
        <img
          src="/svg/divider-top.svg"
          width="101%"
          style={{
            marginLeft: "-.2rem",
            marginTop: "30rem",
          }}
        />
      </TopDividerStyles>
      <TestimonialStyles>
        <h2>What People Are Saying</h2>
        <Carousel
          responsive={quotes}
          infinite={true}
          swipeable={true}
          draggable={true}
          autoPlay
          autoPlaySpeed={5000}
        >
          <>
            <p>
              “I surely had an Epic Adventure this weekend! Glad I booked
              through this team! Lots of great package deals, a little bit of
              everything and something for everyone! Highly recommend going
              through them if you're looking for an Epic time 😎”
            </p>
            <div className="faceContainer">
              <img src="/svg/face.svg" width="30px" />
            </div>
            <p className="customerName">Char Lene, Google review 5 stars</p>
          </>
          <>
            <p>“Guess who had an "Epic" time... this guy!!!”</p>
            <div className="faceContainer">
              <img src="/svg/face.svg" width="30px" />
            </div>
            <p className="customerName">Sean Finnerty, Google review 5 stars</p>
          </>
          <>
            <p>
              “Booking was a breeze and very competitive pricing. Would highly
              recommend.”
            </p>
            <div className="faceContainer">
              <img src="/svg/face.svg" width="30px" />
            </div>
            <p className="customerName">Jesse Shaw, Google review 5 stars</p>
          </>
          <>
            <p>
              “Great company that made planning the adventure part of our trip
              so easy. Really easy website to navigate and a lot of other
              options and ideas for things to do that we didn't know about.”
            </p>
            <div className="faceContainer">
              <img src="/svg/face.svg" width="30px" />
            </div>
            <p className="customerName">
              Charlotte Schofield, Google review 5 stars
            </p>
          </>
        </Carousel>
      </TestimonialStyles>
      <BottomDividerStyles>
        <img
          src="/svg/divider-bottom.svg"
          width="101%"
          style={{ marginLeft: "-.2rem" }}
        />
      </BottomDividerStyles>
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
      <WhyEpic style={{ marginTop: "4rem", marginBottom: "-12rem" }} />
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
}
