import Link from "next/link";

const Footer = ({ year }) => {
  return (
    <div className="footer">
      <div className="footerInner">
        <div className="logoCopyright">
          <img src="/svg/logo-outline.svg" width="100" />
          <p>© {year} Epic Adventure Group Inc.</p>
          <p>All rights reserved.</p>
        </div>
        <div className="adventures">
          <h4>Summer</h4>
          <ul>
            <li>
              <Link href="/adventures/skydiving">Skydiving</Link>
            </li>
            <li>
              <Link href="/adventures/kickinghorseriver">
                Kicking Horse River
              </Link>
            </li>
            <li>
              <Link href="/adventures/helirafting">Heli Rafting</Link>
            </li>
            <li>
              <Link href="/adventures/kananaskis">Kananaskis River</Link>
            </li>
            <li>
              <Link href="/adventures/atv">Off-Road ATV</Link>
            </li>
            <li>
              <Link href="/adventures/zipline">Valley Zipline</Link>
            </li>
            <li>
              <Link href="/adventures/scenicflight">Scenic Flight</Link>
            </li>
            <li>
              <Link href="/adventures/caving">Caving</Link>
            </li>
            <li>
              <Link href="/adventures/canyoning">Canyoning</Link>
            </li>
            <li>
              <Link href="/adventures/heliflight">Heli Flight</Link>
            </li>
            <li>
              <Link href="/adventures/biking">Mountain Biking</Link>
            </li>
            <li>
              <Link href="/adventures/vianorquay">Via Ferrata Mt. Norquay</Link>
            </li>
            <li>
              <Link href="/adventures/viakickinghorse">
                Via Ferrata Kicking Horse
              </Link>
            </li>
          </ul>
        </div>
        <div className="adventures">
          <h4>Sightseeing</h4>
          <ul>
            <li>
              <Link href="/adventures/skybridge">Golden Skybridge</Link>
            </li>
            <li>
              <Link href="/adventures/banffgondola">Banff Gondola</Link>
            </li>
            <li>
              <Link href="/adventures/lakelouisegondola">
                Lake Louise Gondola
              </Link>
            </li>
            <li>
              <Link href="/adventures/goldengondola">Golden Gondola</Link>
            </li>
            <li>
              <Link href="/adventures/jasperskytram">Jasper Skytram</Link>
            </li>
            <li>
              <Link href="/adventures/columbiaicefield">Columbia Icefield</Link>
            </li>
            <li>
              <Link href="/adventures/lakeminnewanka">Lake Minnewanka</Link>
            </li>
            <li>
              <Link href="/adventures/malignelake">Maligne Lake</Link>
            </li>
            <li>
              <Link href="/adventures/skywalk">Skywalk</Link>
            </li>
          </ul>
          <h4 className="winter">Winter</h4>
          <ul>
            <li>
              <span>Stay tuned...</span>
            </li>
          </ul>
        </div>
        <div className="adventures">
          <h4>Destinations</h4>
          <ul>
            <li>
              <Link href="/destinations/canadianrockies">Canadian Rockies</Link>
            </li>
            <li>
              <Link href="/destinations/banffnationalpark">
                Banff National Park
              </Link>
            </li>
            <li>
              <Link href="/destinations/canmore">Canmore</Link>
            </li>
            <li>
              <Link href="/destinations/golden">Golden</Link>
            </li>
          </ul>
          <h4 className="winter">Stay</h4>
          <ul>
            <li>
              <Link href="/stay/banff">Banff</Link>
            </li>
            <li>
              <Link href="/stay/canmore">Canmore</Link>
            </li>
            <li>
              <Link href="/stay/jasper">Jasper</Link>
            </li>
            <li>
              <Link href="/stay/golden">Golden</Link>
            </li>
            <li>
              <Link href="/stay/lakelouise">Lake Louise</Link>
            </li>
          </ul>
        </div>
        <div className="policies adventures">
          <h4>Eat</h4>
          <ul>
            <li>
              <Link href="/eat/banff">Banff</Link>
            </li>
            <li>
              <Link href="/eat/canmore">Canmore</Link>
            </li>
            <li>
              <Link href="/eat/jasper">Jasper</Link>
            </li>
            <li>
              <Link href="/eat/golden">Golden</Link>
            </li>
            <li>
              <Link href="/eat/lakelouise">Lake Louise</Link>
            </li>
          </ul>
          <div className="social">
            <a
              href="https://www.facebook.com/epicgoldenbc"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/svg/facebook.svg" width="22" />
            </a>
            <a
              href="https://www.instagram.com/epicgolden_bc/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/svg/instagram.svg" width="22" />
            </a>
          </div>
          <div className="policyLinks">
            <ul>
              <li>
                <Link href="/privacy">
                  <a>Privacy Policy</a>
                </Link>
              </li>
              <li>
                <Link href="/cancellations">
                  <a>Cancellation Policy</a>
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  <a>Terms and Conditions</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="spacer"></div>
        <div className="getInTouch">
          <h3>Get in touch</h3>
          <a href="mailto:contact@epicadventuregroup.com">
            contact@epicadventuregroup.com
          </a>
          <br />
          <a href="tel:+12509398820">+1 250 939 9589</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
