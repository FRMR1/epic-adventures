import Head from "next/head";
import ReadyToBook from "../components/ReadyToBook";
import { HeroImageStyles } from "../components/styles/HeroImageStyles";
import { TopDividerStyles } from "../components/styles/TopDividerStyles";
import { BottomDividerStyles } from "../components/styles/BottomDividerStyles";
import { FooterDividerStyles } from "../components/styles/FooterDividerStyles";
import { ComboSectionStyles } from "../components/styles/ComboSectionStyles";
import { AdventureHeadingStyles } from "../components/styles/AdventureHeadingStyles";
import { HeroVideoStyles } from "../components/styles/HeroVideoStyles";
import { MobileVideoStyles } from "../components/styles/MobileVideoStyles";
import dynamic from "next/dynamic";
import { ActivityTilesStyles } from "../components/styles/ActivityTilesStyles";
import ActivityTile from "../components/ActivityTile";
import Link from "next/link";
import { ComboTableStyles } from "../components/styles/ComboTableStyles";

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
      <AdventureHeadingStyles>
        <div className="mobileVideo">
          <MobileVideoStyles>
            <CloudflareVideo source={videoURL} />
          </MobileVideoStyles>
        </div>
        <div className="oneCol">
          <h2>
            Experience More And
            <br /> Combo Your Adventures
          </h2>
          <p>
            Experience more with our exclusive and unique summer combos and
            save. These combos can be customized over multiple days and if there
            is something you don't see but want to combo, get in touch with our
            agent and we will set you up with your own unique combo for you and
            your crew.
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
        <h2>Summer Adventure Combos</h2>
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
            rrsp="777"
            price="699"
          />
          <ActivityTile
            location="Golden"
            title="Golden Ultimate"
            desc="Rafting full day Kicking Horse river, skydiving, ATV half-day, via ferrata (Discovery route Kicking Horse)."
            img="379df31d-2ab4-495a-21d3-cce6e7585100"
            url="https://epicadventuregroup.rezdy.com/485632/combo-golden-ultimate-raft-skydive-atv-via-ferrata-multi-day"
            rrsp="933"
            price="840"
          />
          <ActivityTile
            location="Golden"
            title="Don't Tell Mom"
            desc="Full day rafting Kicking Horse river, skydiving."
            img="853d630c-43d8-484c-23fb-8bf1b9b23a00"
            url="https://epicadventuregroup.rezdy.com/444202/combo-don-t-tell-mom-raft-full-day-skydive"
            rrsp="538"
            price="484"
          />
          <ActivityTile
            location="Golden"
            title="Mud Express"
            desc="Half-day ATV trip, rafting Kicking Horse river PM."
            img="c20d505c-ac97-4e19-f2d0-12a55afce900"
            url="https://epicadventuregroup.rezdy.com/443893/combo-mud-express-atv-raft-express"
            rrsp="338"
            price="304"
          />
          <ActivityTile
            location="Golden"
            title="Dirt Dive"
            desc="Half-day ATV trip, skydiving."
            img="450331df-2fcb-4401-853a-4bf6bbd10f00"
            url="https://epicadventuregroup.rezdy.com/443897/combo-dirt-dive-atv-skydive"
            rrsp="588"
            price="529"
          />
          <ActivityTile
            location="Golden"
            title="Double Trouble"
            desc="Skydiving, rafting Kicking Horse river PM."
            img="05380fa9-b6cb-4696-9e23-e1dc6ba55000"
            url="https://epicadventuregroup.rezdy.com/443892/combo-double-trouble-skydive-raft-express"
            rrsp="448"
            price="403"
          />
          <ActivityTile
            location="Golden"
            title="Family Epic Pass"
            desc="Family rafting Kicking Horse, Golden Skyridbe Adventure Pass."
            img="29684fe5-810d-4e6e-01a3-0157e64ff800"
            url="https://epicadventuregroup.rezdy.com/485655/combo-family-epic-pass-valley-zipline-tour-family-rafting-golden-skybridge-multi-day"
            rrsp="183"
            price="165"
          />
        </div>
      </ActivityTilesStyles>
      {/* <ActivityTilesStyles>
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
            desc="Use promo code SKYBRIDGE50 when booking."
            img="a4d0b160-416f-4188-70b1-54ef7792ad00"
            save="50"
            code="SKYBRIDGE50"
          />
          <ActivityTile
            location="Coupon"
            title="Skybridge Adventure Pass"
            desc="Use promo code ADVENTURE25 when booking."
            img="724f0594-c063-4ee7-7847-102b6f8da600"
            save="25"
            code="ADVENUTRE25"
          />
          <ActivityTile
            location="Coupon"
            title="Scenic Flight"
            desc="Use promo code FLIGHT10 when booking."
            img="cc253092-6d49-4054-60d8-961ff3c9d600"
            save="10"
            code="FLIGHT10"
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
        </div>
      </ActivityTilesStyles> */}
      {/* <ActivityTilesStyles>
        <h2>Hot Combo Ideas This Summer</h2>
        <p>
          Some Epic hot combo ideas for this summer to keep you cool and doing
          it all. Add promo code to check out when finalising booking.
        </p>
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
