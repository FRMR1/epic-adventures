import { WhyEpicStyles } from "../styles/WhyEpicStyles";

const WhyEpic = () => {
  return (
    <WhyEpicStyles>
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
                With every purchase you get access to local deals and offers on
                partnered hotels, restaurants and activities to save you money
                and connect you with local legends.
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
                All of our adventures are operated and owned by local people and
                families. Your money stays local and that matters.
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
                We hand pick the best value trips to save you time and research.
                Chosen by internationally experienced guides.
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
    </WhyEpicStyles>
  );
};

export default WhyEpic;
