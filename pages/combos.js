import Head from "next/head";
import ReadyToBook from "../components/ReadyToBook";
import { HeroImageStyles } from "../components/styles/HeroImageStyles";
import { TopDividerStyles } from "../components/styles/TopDividerStyles";
import { BottomDividerStyles } from "../components/styles/BottomDividerStyles";
import { FooterDividerStyles } from "../components/styles/FooterDividerStyles";
import { ComboSectionStyles } from "../components/styles/ComboSectionStyles";
import { SectionStyles } from "../components/styles/SectionStyles";
import { HeroVideoStyles } from "../components/styles/HeroVideoStyles";
import { MobileVideoStyles } from "../components/styles/MobileVideoStyles";
import dynamic from "next/dynamic";
import { ActivityTilesStyles } from "../components/styles/ActivityTilesStyles";
import ActivityTile from "../components/ActivityTile";
import Link from "next/link";

const CloudflareVideo = dynamic(() => import("../components/CloudflareVideo"), {
  ssr: false,
});

const HeroImageSlider = dynamic(() => import("../components/HeroImageSlider"), {
  ssr: false,
});

const Combos = ({}) => {
  // Cloudinary video URL
  const videoURL = "0e546742a408011586e2c14b6c67d5df";

  return (
    <>
      <Head>
        <title>Epic Rockies | Combos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="heroVideo">
        <HeroVideoStyles>
          <CloudflareVideo source={videoURL} />
        </HeroVideoStyles>
      </div>
      <HeroImageSlider
        title="Epic Combos"
        images={["COMBOS1", "COMBOS2", "COMBOS3", "COMBOS4", "COMBOS5"]}
      />
      <TopDividerStyles>
        <img
          src="/svg/divider-top.svg"
          width="101%"
          style={{ marginLeft: "-.2rem" }}
        />
      </TopDividerStyles>
      <SectionStyles>
        <div className="mobileVideo">
          <MobileVideoStyles>
            <CloudflareVideo source={videoURL} />
          </MobileVideoStyles>
        </div>
        <h3>Experience More And Combo Your Adventures</h3>
        <p>
          Experience more with our exclusive and unique summer combos and save.
          These combos can be customized over multiple days and if there is
          something you don't see but want to combo, get in touch with our agent
          and we will set you up with your own unique combo for you and your
          crew.
        </p>
      </SectionStyles>
      <BottomDividerStyles>
        <img
          src="/svg/divider-bottom.svg"
          width="101%"
          style={{ marginLeft: "-.2rem" }}
        />
      </BottomDividerStyles>
      <ActivityTilesStyles>
        <h2>Summer Adventure Combos</h2>
        <div className="tiles">
          <ActivityTile
            location="Golden"
            title="Epic Golden Pass"
            desc="Rafting Kicking Horse river full day, skydiving, ATV half day."
            img="595ec27a-72a8-45c6-99a4-d7c50fead200"
            url="https://epicadventuregroup.rezdy.com/443894/combo-epic-golden-pass-raft-skydive-atv-multi-day"
          />
          <ActivityTile
            location="Golden"
            title="Golden Ultimate"
            desc="Rafting full day Kicking Horse river, skydiving, ATV half-day, via ferrata (Discovery route Kicking Horse)."
            img="379df31d-2ab4-495a-21d3-cce6e7585100"
            url="https://epicadventuregroup.rezdy.com/485632/combo-golden-ultimate-raft-skydive-atv-via-ferrata-multi-day"
          />
          <ActivityTile
            location="Golden"
            title="Don't Tell Mom"
            desc="Full day rafting Kicking Horse river, skydiving."
            img="853d630c-43d8-484c-23fb-8bf1b9b23a00"
            url="https://epicadventuregroup.rezdy.com/444202/combo-don-t-tell-mom-raft-full-day-skydive"
          />
          <ActivityTile
            location="Golden"
            title="Mud Express"
            desc="Half-day ATV trip, rafting Kicking Horse river PM."
            img="c20d505c-ac97-4e19-f2d0-12a55afce900"
            url="/https://epicadventuregroup.rezdy.com/443893/combo-mud-express-atv-raft-express"
          />
          <ActivityTile
            location="Golden"
            title="Dirt Dive"
            desc="Half-day ATV trip, skydiving."
            img="450331df-2fcb-4401-853a-4bf6bbd10f00"
            url="https://epicadventuregroup.rezdy.com/443897/combo-dirt-dive-atv-skydive"
          />
          <ActivityTile
            location="Golden"
            title="Double Trouble"
            desc="Skydiving, rafting Kicking Horse river PM."
            img="05380fa9-b6cb-4696-9e23-e1dc6ba55000"
            url="https://epicadventuregroup.rezdy.com/443892/combo-double-trouble-skydive-raft-express"
          />
          <ActivityTile
            location="Banff"
            title="Banff Ultimate Adventurer"
            desc="Via ferrata Mt. Norquay, canyoning Heart Creek canyon."
            img="5b9dc05e-dbbf-4396-1d3a-0f735ec71e00"
            url="https://epicadventuregroup.rezdy.com/485635/combo-banff-ultimate-adventurer-via-ferrata-canyoning-multi-day"
          />
          <ActivityTile
            location="Banff"
            title="Banff Epic Adventurer"
            desc="Caving (Adventure Route), via ferrata Mt. Noruqay, canyoning (Heart Creek Canyon)."
            img="d9d4b234-8f74-41d1-099f-ac5d56ccba00"
            url="https://epicadventuregroup.rezdy.com/485636/combo-banff-epic-adventurer-caving-via-ferrata-canyoning-multi-day"
          />
          <ActivityTile
            location="Canmore, Golden"
            title="Under and Over"
            desc="Caving (Adventure Route), skydiving."
            img="77c056a1-9c75-4d03-65a9-64e6f148a700"
            url="https://epicadventuregroup.rezdy.com/485638/combo-under-over-caving-skydive-multi-day"
          />
          <ActivityTile
            location="Canmore"
            title="Rock Hunter"
            desc="Caving (Adventure Route), canyoning (Heart Creek Canyon)."
            img="a58fe96a-5510-4229-b4ef-420e3d325100"
            url="https://epicadventuregroup.rezdy.com/485640/combo-rock-hunter-caving-canyoning-multi-day"
          />
          <ActivityTile
            location="Golden, Canmore"
            title="Rockies Explorer"
            desc="Rafting Kicking Horse river full day, caving (Adventure Route)."
            img="de77175d-b602-4e42-9d06-bdecdbdf1300"
            url="https://epicadventuregroup.rezdy.com/485641/combo-rockies-explorer-raft-caving-multi-day"
          />
          <ActivityTile
            location="Golden, Canmore"
            title="Poseidon"
            desc="Rafting Kicking Horse river full day, canyoning Heart Creek canyon."
            img="10cbb395-87a6-449e-50cc-f4981df60900"
            url="https://epicadventuregroup.rezdy.com/485643/combo-poseidon-raft-canyoning-multi-day"
          />
          <ActivityTile
            location="Golden, Banff"
            title="Mountaineer"
            desc="Rafting Kicking Horse river full day, via ferrata Mt. Norquay."
            img="f1e45bd8-ba69-46ed-e0ea-f304fdc3dc00"
            url="https://epicadventuregroup.rezdy.com/485647/combo-mountaineer-raft-via-ferrata-multi-day"
          />
          <ActivityTile
            location="Golden, Banff"
            title="Zeus"
            desc="Skydiving, via ferrata Mt. Norquay."
            img="b7c5de08-363b-48a9-3230-70aa6651ac00"
            url="https://epicadventuregroup.rezdy.com/485651/combo-zeus-skydive-via-ferrata-multi-day"
          />
          <ActivityTile
            location="Golden, Canmore"
            title="Thrill Seeker"
            desc="Skydiving, canyoning (Heart Creek Canyon)."
            img="5a0eb362-1e5f-4465-e16b-aafcdb251600"
            url="https://epicadventuregroup.rezdy.com/485654/combo-thrill-seeker-skydive-canyoning-multi-day"
          />
          <ActivityTile
            location="Golden, Canmore"
            title="Family Epic Pass"
            desc="Valley zipline, rafting Kananaskis river, Golden Skybridge."
            img="5a0eb362-1e5f-4465-e16b-aafcdb251600"
            url="https://epicadventuregroup.rezdy.com/485655/combo-family-epic-pass-valley-zipline-tour-family-rafting-golden-skybridge-multi-day"
          />
          {/* <div className="hidden-flex-item" /> */}
        </div>
        <div className="marginBottom" />
      </ActivityTilesStyles>
      <ActivityTilesStyles>
        <h2>Sightseeing Add-ons</h2>
        <p>
          Add any of these sight-seeing tours to any of our solo adventures or
          existing combos and save. Use the appropriate promo code in our check
          out to add these Epic memories to your next adventure.
        </p>
        <div className="tiles">
          <ActivityTile
            location="Coupon"
            title="Golden Skybridge Park Entry"
            desc="Use promo code SKYBRIDGE10 when booking."
            img="a4d0b160-416f-4188-70b1-54ef7792ad00"
            save="10"
            code="SKYBRIDGE10"
          />
          <ActivityTile
            location="Coupon"
            title="Heli Flight"
            desc="Use promo code HELI5 when booking,"
            img="48693f6b-e791-4232-f528-806c02b4f400"
            save="5"
            code="HELI5"
          />
          <ActivityTile
            location="Coupon"
            title="Scenic Flight"
            desc="FUse promo code FLIGHT5 when booking."
            img="cc253092-6d49-4054-60d8-961ff3c9d600"
            save="5"
            code="FLIGHT5"
          />
          <ActivityTile
            location="Coupon"
            title="Golden Eagle Express"
            desc="Use promo code GONDOLA10 when booking."
            img="545e27e2-072f-4e13-253f-40898912f800"
            save="10"
            code="GONDOLA10"
          />
          <ActivityTile
            location="Coupon"
            title="Banff Gondola"
            desc="Use promo code GONDOLA10 when booking."
            img="1fda534c-321e-4ba7-0eab-2d28446cae00"
            save="10"
            code="GONDOLA10"
          />
          <ActivityTile
            location="Coupon"
            title="Lake Louise Gondola"
            desc="Use promo code GONDOLA10 when booking."
            img="51ceaae5-19a4-49ba-345e-7fcca6c35d00"
            save="10"
            code="GONDOLA10"
          />
          <ActivityTile
            location="Coupon"
            title="Jasper Skytram"
            desc="Use promo code GONDOLA10 when booking."
            img="3fd3e00c-5d89-478c-a4be-26ec8fd99b00"
            save="10"
            code="GONDOLA10"
          />
          <ActivityTile
            location="Coupon"
            title="Cruises"
            desc="Use promo code CRUISE10 when booking."
            img="1adbc0df-cf4c-4ecb-75f3-44b52f92e600"
            save="10"
            code="CRUISE10"
          />
          <div className="hidden-flex-item" />
        </div>
        <div className="marginBottom" />
      </ActivityTilesStyles>
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

export default Combos;
