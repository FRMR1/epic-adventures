import Image from "next/image"
import Head from "next/head"
import ReadyToBook from "../components/ReadyToBook"
import Divider from "../components/Divider"
import { HeroImageStyles } from "../components/styles/HeroImageStyles"
import { SectionStyles } from "../components/styles/SectionStyles"
import { TopDividerStyles } from "../components/styles/TopDividerStyles"
import { BottomDividerStyles } from "../components/styles/BottomDividerStyles"
import { AboutSectionStyles } from "../components/styles/AboutSectionStyles"
import { FooterDividerStyles } from "../components/styles/FooterDividerStyles"

const About = () => {
    return (
        <>
            <Head>
                <title>Epic Adventures | About</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeroImageStyles image="combo1">
                <div className="heroText">
                    <h2>About Epic.</h2>
                </div>
            </HeroImageStyles>
            <TopDividerStyles>
                <img src="/svg/divider-top.svg" width="100%" />
            </TopDividerStyles>
            <SectionStyles>
                <h3>Trust and Let Go</h3>
                <p className="quote">
                    “Happiness and freedom begin with a clear understanding of
                    one principle: some things are within our control, and some
                    things are not.”
                </p>
                <p className="author">
                    Epictetus, Greek Philosopher{" "}
                    <span class="authorYear">(50AD - 130AD)</span>
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
            <AboutSectionStyles>
                <div>
                    <p className="big">
                        Get outside and give up control. Whether by jumping out
                        of an airplane or being guided through the rapids, allow
                        yourself to trust – and let go. Epic Adventure Group is
                        operated out of Golden, British Columbia by humans who
                        want you to experience more out of Canada’s Adventure
                        Capital. We allow you to make combination packages of
                        the best adventures Golden has to offer, giving you
                        exclusive savings on experiences you’ll never forget.
                    </p>
                </div>
                {/* <div className="twoCol">
                    <div className="left">
                        <p className="small">
                            Epic Adventure Group is operated out of Golden,
                            British Columbia by humans who want you to
                            experience more out of Canada’s Adventure Capital.
                            We allow you to make combination packages of the
                            best adventures Golden has to offer, giving you
                            exclusive savings on experiences you’ll never
                            forget.
                        </p>
                    </div>
                    <div className="right imageRotate">
                        <Image
                            src="/images/combo9.jpg"
                            layout="responsive"
                            width="100%"
                            height="auto"
                            objectFit="contain"
                            alt="Epic Adventures"
                        />
                    </div>
                </div> */}
            </AboutSectionStyles>
            <AboutSectionStyles grey={true} bottom={true}>
                <Divider />
                <div className="bottomSection">
                    <h3 className="center">About Golden</h3>
                    <p className="center">
                        Golden is at the heart of the Canadian Rockies, where
                        the Kicking Horse River and the Columbia River meet and
                        offers access to some of the most pristine backcountry
                        around. Surrounded by the vast mountain ranges of six
                        incredible Canadian national parks, Golden is as
                        picturesque as it is adventurous.
                    </p>
                    <p className="center">
                        Home of the Ktunaxa people, other indigenous peoples
                        also harvested, hunted, fished and settled seasonally
                        within the area, including the Shuswap peoples who for
                        centuries have travelled to and inhabited the Ktunaxa
                        homelands. It was the spirit of adventure that brought
                        the first explorers over the Rocky Mountains in the 19
                        th century, and Golden still holds that same feeling of
                        discovery and exploration for visitors and the locals
                        who call this valley home.
                    </p>
                    <p className="center">
                        Golden is located in southeastern British Columbia right
                        on the Trans-Canada Highway, approximately 262
                        kilometers west of Calgary or 713 kilometres east of
                        Vancouver. Banff is a short 1 ½ hours or 4 hours to BC’s
                        Okanagan Valley.
                    </p>
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
    )
}

export default About
