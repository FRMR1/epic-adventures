import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Adventure from "../../components/Adventure";
import ReadyToBook from "../../components/ReadyToBook";
import { HeroImageStyles } from "../../components/styles/HeroImageStyles";
import { AdventureHeadingStyles } from "../../components/styles/AdventureHeadingStyles";
import { TopDividerStyles } from "../../components/styles/TopDividerStyles";
import { ReadyToBookStyles } from "../../components/styles/ReadyToBookStyles";
import { BottomDividerStyles } from "../../components/styles/BottomDividerStyles";
import { FooterDividerStyles } from "../../components/styles/FooterDividerStyles";
import { AdventuresStyles } from "../../components/styles/AdventuresStyles";
import { TextSectionStyles } from "../../components/styles/TextSectionStyles";
import { ActivityTilesStyles } from "../../components/styles/ActivityTilesStyles";
import ActivityTile from "../../components/ActivityTile";
import WhyEpic from "../../components/WhyEpic";

const Adventures = () => {
  return (
    <>
      <Head>
        <title>Epic Rockies | Adventures</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroImageStyles image="rafting5">
        <div className="heroText">
          <h2>Adventures.</h2>
        </div>
      </HeroImageStyles>
      <TopDividerStyles>
        <img
          src="/svg/divider-top.svg"
          width="101%"
          style={{ marginLeft: "-.2rem" }}
        />
      </TopDividerStyles>
      <AdventureHeadingStyles>
        <div className="oneCol">
          <h2>A Playground Awaits</h2>
          <p>
            A Canadian summer in the mountains is like no other: spectacular
            views, glacier fed rivers and lakes, majestic wildlife, wetlands and
            steep canyons! Add human creativity, personality and a sense of
            adventure, you get a wild opportunity to experience one of the
            world's most beautiful locations in a very unique way!
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

      <ActivityTilesStyles>
        <h2>Summer Adventures</h2>
        <div className="tiles">
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
            title="Rafting Kicking Horse River"
            desc="Take on the world famous Kicking Horse River. With rapids like Man Eater and Shot Gun, this river is an experience that can't be missed."
            img="c61cf00a-32f2-41c0-09fe-b2c742189700"
            url="/adventures/kickinghorseriver"
            price="99"
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
            title="Scenic Flight"
            desc="Charter your own plane to glaciers and above the mountains for some serious views of the wild back country."
            img="e3be2b9b-00f6-48b3-7c3f-61f632f2a200"
            url="/adventures/scenicflight"
            price="250"
          />
          <ActivityTile
            location="Golden"
            title="Heli Rafting"
            desc="Take on the lower Kicking Horse River, only accessible by helicopter. This is a unique, white-knuckle experience."
            img="e6c940c4-e443-4b53-59fc-743960dc1a00"
            url="/adventures/helirafting"
            price="399"
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
            location="Canmore"
            title="Caving"
            desc="Take yourself underground in this unique experience inside the bow valley mountains. This trip will expand your relationship with the mountains and local habitat. "
            img="c3eff5e5-8bc1-45a6-8ab3-07dfb6cf5800"
            url="/adventures/caving"
            price="135"
          />
          <ActivityTile
            location="Golden"
            title="Valley Zipline"
            desc="As you navigate the course with your adventure guide this zipline course will take you through the tree tops at high speeds."
            img="ac7427ae-cfaa-43c6-2a41-885cb7256700"
            url="/adventures/zipline"
            price="89"
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
            title="Via Ferrata Mt. Norquay"
            desc="Take on Mount Norquay and get the best views of the town of
                Banff and the bow valley, challenge yourself."
            img="4b009846-f3cf-4c1f-e795-896e5c2b1000"
            url="/adventures/vianorquay"
            price="185"
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
            location="Golden"
            title="Mountain Biking"
            desc="Mountain biking at the Kicking Horse resort is an epic day on world-class trails, maintain and constructed by the trail crew of the resort."
            img="69256104-8b47-41b1-48a2-d88cee247100"
            url="/adventures/biking"
            price="65"
          />
          <ActivityTile
            location="Golden"
            title="Paragliding"
            desc="Take your sense of adventure to new heights and soar like an eagle over the Canadian Rockies."
            img="0b0fa6d5-1a82-4129-e8d4-560f1d0e2700"
            url="/adventures/paragliding"
            price="300"
          />
          <div className="hidden-flex-item" />
        </div>
        <div className="marginBottom" />
      </ActivityTilesStyles>

      <ActivityTilesStyles>
        <h2>Sightseeing</h2>
        <div className="tiles">
          <ActivityTile
            location="Golden"
            title="Golden Skybridge"
            desc="The new Golden Skybridge, home to Canada's highest suspension bridges, zipline, giant swing and treetop adventure park."
            img="e4f24150-dfa8-4425-9ece-b3c0878e1a00"
            url="/adventures/skybridge"
            price="39"
          />
          <ActivityTile
            location="Golden"
            title="Golden Gondola"
            desc="Take the Golden Eagle Express Gondola to the top of the resort to get those mountain views and access hiking trails."
            img="545e27e2-072f-4e13-253f-40898912f800"
            url="/adventures/goldengondola"
            price="50"
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
            location="Banff"
            title="Banff Gondola"
            desc="Above the clouds and town of Banff, the gondola will give access to a bird's eye view as you breathe in the fresh mountain air, this is a must do while on your visit."
            img="f9e93463-ee8e-4e91-9806-9187265d2d00"
            url="/adventures/banffgondola"
            price="60"
          />
          <ActivityTile
            location="Lake Louise"
            title="Lake Louise Gondola"
            desc="Take a higher perspective at Lake Louise Resorts Gondola to gain access to unreal views of the valley, Lake and access to hiking trails."
            img="4b009846-f3cf-4c1f-e795-896e5c2b1000"
            url="/adventures/lakelouisegondola"
            price="TBD"
          />
          <ActivityTile
            location="Jasper"
            title="Columbia Icefield"
            desc="An unforgettable tour onto the glaciers with this epic off road bus."
            img="34a9b175-de9e-401a-91e4-a0bd3eac5a00"
            url="/adventures/columbiaicefield"
            price="92"
          />
          <ActivityTile
            location="Jasper"
            title="Skywalk"
            desc="Take a glass floored experience over the edge and see the epic views of the glaciers."
            img="e0b73138-6d65-4b1e-fc92-6f2c9631f800"
            url="/adventures/skywalk"
            price="34"
          />
          <ActivityTile
            location="Banff"
            title="Lake Minnewanka"
            desc="Take a trip on the pristine waters of the lake on this boat tour nestled in the mountains just outside of the town of Banff."
            img="1adbc0df-cf4c-4ecb-75f3-44b52f92e600"
            url="/adventures/lakeminnewanka"
            price="62"
          />
          <ActivityTile
            location="Jasper"
            title="Maligne Lake Cruise"
            desc="A boutique cruise over the pristine lake and untouched scenery."
            img="c20cd904-9f5d-41fd-5b55-47895cf87b00"
            url="/adventures/malignelake"
            price="75"
          />
          <ActivityTile
            location="Jasper"
            title="Skytram"
            desc="See the park from above and witness to the pure magnitude of the Rockies."
            img="3fd3e00c-5d89-478c-a4be-26ec8fd99b00"
            url="/adventures/skytram"
            price="60"
          />
        </div>
        <div className="marginBottom" />
      </ActivityTilesStyles>

      <WhyEpic />

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

export default Adventures;
