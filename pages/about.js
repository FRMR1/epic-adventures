import Image from "next/image";
import Head from "next/head";
import ReadyToBook from "../components/ReadyToBook";
import Divider from "../components/Divider";
import { HeroImageStyles } from "../components/styles/HeroImageStyles";
import { SectionStyles } from "../components/styles/SectionStyles";
import { TopDividerStyles } from "../components/styles/TopDividerStyles";
import { BottomDividerStyles } from "../components/styles/BottomDividerStyles";
import { AboutSectionStyles } from "../components/styles/AboutSectionStyles";
import { FooterDividerStyles } from "../components/styles/FooterDividerStyles";
import WhyEpic from "../components/WhyEpic";

const About = () => {
  return (
    <>
      <Head>
        <title>Epic Adventures | About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroImageStyles image="combo1">
        <div className="heroText">
          <h2>We Are Epic.</h2>
        </div>
      </HeroImageStyles>
      <TopDividerStyles>
        <img
          src="/svg/divider-top.svg"
          width="101%"
          style={{ marginLeft: "-.1rem" }}
        />
      </TopDividerStyles>
      <SectionStyles>
        <p>
          With a focus on Adventure Tourism and the Canadian Rockies, our
          passion is the great outdoors. We work with the some of Canada's
          Premiere tour operators to give you the best quality products and
          authentic experiences throughout Canadas wild west. From Canmore,
          Banff, Jasper, Lake Louise and Golden our mission is to give you the
          best to save you time and money while you experience this playground
          with us and make it Epic.
        </p>
      </SectionStyles>
      <BottomDividerStyles>
        <div className="inner">
          <img
            src="/svg/divider-bottom.svg"
            width="101%"
            style={{ marginLeft: "-.1rem" }}
          />
        </div>
      </BottomDividerStyles>
      <WhyEpic style={{ marginTop: "10rem" }} />
      <AboutSectionStyles grey={true} bottom={true}>
        <Divider />
        <div className="logos">
          <h3 className="center">Our Epic Family</h3>
          <div className="grid">
            <img src="/images/logos/alpine-dark.svg" />
            <img src="/images/logos/banffgondola-dark.svg" />
            <img src="/images/logos/chinookrafting.svg" />
            <img src="/images/logos/coa.svg" />
            <img src="/images/logos/columbiaicefield-dark.svg" />
            <img src="/images/logos/extremeyeti-dark.svg" />
            <img src="/images/logos/glacierrafting-dark.svg" />
            <img src="/images/logos/jasperskytram-dark.svg" />
            <img src="/images/logos/kickinghorse-dark.svg" />
            <img src="/images/logos/malignelake-dark.svg" />
            <img src="/images/logos/minnewanka-dark.svg" />
            <img src="/images/logos/norquay-dark.svg" />
            <img src="/images/logos/scenicflights-dark.svg" />
            <img src="/images/logos/skybridge-dark.svg" />
          </div>
        </div>
      </AboutSectionStyles>
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

export default About;
