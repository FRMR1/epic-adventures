import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { useMobileMenuState } from "../../lib/mobileMenuState";

const Nav = () => {
  // Menu state
  const { isOpen, setIsOpen } = useMobileMenuState();

  // Close menu when nav item is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Responsive
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

  return (
    <div className="header">
      <div className="navContainer">
        <Link href="/">
          <a>
            <Image
              src="/svg/logo.svg"
              alt="Epic Adventures"
              width={120}
              height={60}
            />
          </a>
        </Link>
        <div className="hamburgerMenu" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`mobileMenuStyles ${isOpen && "isOpen"}`}>
          <div className="inner">
            <ul>
              <li>
                <Link href="/">
                  <a onClick={closeMenu}>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a onClick={closeMenu}>About</a>
                </Link>
              </li>
              <li>
                <Link href="/destinations/canadianrockies">
                  <a onClick={closeMenu}>Canadian Rockies</a>
                </Link>
                <ul>
                  <li>Destinations</li>
                  <li>
                    <Link href="/destinations/canadianrockies">
                      <a onClick={closeMenu}>Canadian Rockies</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/destinations/banffnationalpark">
                      <a onClick={closeMenu}>Banff National Park</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/destinations/canmore">
                      <a onClick={closeMenu}>Canmore</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/destinations/golden">
                      <a onClick={closeMenu}>Golden</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/destinations/jasper">
                      <a onClick={closeMenu}>Jasper</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/destinations/lakelouise">
                      <a onClick={closeMenu}>Lake Louise</a>
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li>Stay</li>
                  <li>
                    <Link href="/stay/banff">
                      <a onClick={closeMenu}>Banff</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/stay/canmore">
                      <a onClick={closeMenu}>Canmore</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/stay/golden">
                      <a onClick={closeMenu}>Golden</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/stay/jasper">
                      <a onClick={closeMenu}>Jasper</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/stay/lakelouise">
                      <a onClick={closeMenu}>Lake Louise</a>
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li>Eat</li>
                  <li>
                    <Link href="/eat/banff">
                      <a onClick={closeMenu}>Banff</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/eat/canmore">
                      <a onClick={closeMenu}>Canmore</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/eat/golden">
                      <a onClick={closeMenu}>Golden</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/eat/jasper">
                      <a onClick={closeMenu}>Jasper</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/eat/lakelouise">
                      <a onClick={closeMenu}>Lake Louise</a>
                    </Link>
                  </li>
                </ul>
                <li>
                  <Link href="/adventures">
                    <a onClick={closeMenu}>Adventures</a>
                  </Link>
                  <ul>
                    <li>Summer</li>
                    <li>
                      <Link href="/adventures/skydiving">
                        <a onClick={closeMenu}>Skydiving</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/adventures/kickinghorseriver">
                        <a onClick={closeMenu}>Kicking Horse River</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/adventures/helirafting">
                        <a onClick={closeMenu}>Heli Rafting</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/adventures/kananaskisriver">
                        <a onClick={closeMenu}>Kananaskis River</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/adventures/atv">
                        <a onClick={closeMenu}>ATV Off-Road</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/adventures/zipline">
                        <a onClick={closeMenu}>Valley Zipline</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/adventures/scenicflight">
                        <a onClick={closeMenu}>Scenic Flight</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/adventures/canyoning">
                        <a onClick={closeMenu}>Canyoning</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/adventures/caving">
                        <a onClick={closeMenu}>Caving</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/adventures/heliflight">
                        <a onClick={closeMenu}>Heli Flight</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/adventures/paragliding">
                        <a onClick={closeMenu}>Paragliding</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/adventures/biking">
                        <a onClick={closeMenu}>Mountain Biking</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/adventures/vianorquay">
                        <a onClick={closeMenu}>Via Ferrata Mt. Norquay</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/adventures/viakickinghorse">
                        <a onClick={closeMenu}>Via Ferrata Kicking Horse</a>
                      </Link>
                    </li>
                    <ul>
                      <li>Sightseeing</li>
                      <li>
                        <Link href="/adventures/skybridge">
                          <a onClick={closeMenu}>Golden Skyridge</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/adventures/banffgondola">
                          <a onClick={closeMenu}>Banff Gondola</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/adventures/lakelouisegondola">
                          <a onClick={closeMenu}>Lake Louise Gondola</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/adventures/goldengondola">
                          <a onClick={closeMenu}>Golden Gondola</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/adventures/jasperskytram">
                          <a onClick={closeMenu}>Jasper Skytram</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/adventures/columbiaicefield">
                          <a onClick={closeMenu}>Columbia Icefield</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/adventures/skywalk">
                          <a onClick={closeMenu}>Skywalk</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/adventures/lakeminnewanka">
                          <a onClick={closeMenu}>Lake Minnewanka</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/adventures/malignelake">
                          <a onClick={closeMenu}>Maligne Lake</a>
                        </Link>
                      </li>
                    </ul>
                  </ul>
                </li>
              </li>
              <li>
                <Link href="/combos">
                  <a onClick={closeMenu}>Combos</a>
                </Link>
              </li>
              <li>
                <Link href="https://epicadventuregroup.rezdy.com/">
                  <a onClick={closeMenu} target="_blank" rel="noreferrer">
                    Book Now
                  </a>
                </Link>
              </li>
              <li className="mobileTel">
                <span>
                  Tel: <a href="tel:+12509398820">+1 250 939 9589</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="navRight">
          <div class="topNavPhone">
            <span>
              Tel:<a href="tel:+12509398820">+1 250 939 9589</a>
            </span>
          </div>
          <Link href="/about">About</Link>
          <div className="dropdown">
            <Link href="/destinations/canadianrockies">
              <a className="dropDownLink">Canadian Rockies</a>
            </Link>
            <div className="dropdownContent">
              <div className="gridContainer">
                <div className="col">
                  <h3>Destinations</h3>
                  <Link href="/destinations/canadianrockies">
                    Canadian Rockies
                  </Link>
                  <Link href="/destinations/banffnationalpark">
                    Banff National Park
                  </Link>
                  <Link href="/destinations/canmore">Canmore</Link>
                  <Link href="/destinations/golden">Golden</Link>
                  <Link href="/destinations/jasper">Jasper</Link>
                  <Link href="/destinations/lakelouise">Lake Louise</Link>
                </div>
                <div className="col">
                  <h3>Stay</h3>
                  <Link href="/stay/banff">Banff</Link>
                  <Link href="/stay/canmore">Canmore</Link>
                  <Link href="/stay/jasper">Jasper</Link>
                  <Link href="/stay/golden">Golden</Link>
                  <Link href="/stay/lakelouise">Lake Louise</Link>
                </div>
                <div className="col">
                  <h3>Eat</h3>
                  <Link href="/eat/banff">Banff</Link>
                  <Link href="/eat/canmore">Canmore</Link>
                  <Link href="/eat/jasper">Jasper</Link>
                  <Link href="/eat/golden">Golden</Link>
                  <Link href="/eat/lakelouise">Lake Louise</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown">
            <Link href="/adventures">
              <a className="dropDownLink">Adventures</a>
            </Link>
            <div className="dropdownContent adventures">
              <div className="gridContainer gridContainer2">
                <div className="col">
                  <h3>Summer</h3>
                  <Link href="/adventures/skydiving">Skydiving</Link>
                  <Link href="/adventures/kickinghorseriver">
                    Kicking Horse River
                  </Link>
                  <Link href="/adventures/helirafting">Heli Rafting</Link>
                  <Link href="/adventures/kananaskisriver">
                    Kananaskis River
                  </Link>
                  <Link href="/adventures/atv">ATV Off-Road</Link>
                  <Link href="/adventures/zipline">Valley Zipline</Link>
                  <Link href="/adventures/scenicflight">Scenic Flight</Link>
                  <Link href="/adventures/canyoning">Canyoning</Link>
                </div>
                <div className="col">
                  <Link href="/adventures/caving">Caving</Link>
                  <Link href="/adventures/heliflight">Heli Flight</Link>
                  <Link href="/adventures/paragliding">Paragliding</Link>
                  <Link href="/adventures/biking">Mountain Biking</Link>
                  <Link href="/adventures/vianorquay">
                    Via Ferrata Mt. Norquay
                  </Link>
                  <Link href="/adventures/viakickinghorse">
                    Via Ferrata Kicking Horse
                  </Link>
                  <h3 className="topMargin">Winter</h3>
                  <span>Stay tuned...</span>
                </div>
                <div className="col">
                  <h3>Sightseeing</h3>
                  <Link href="/adventures/skybridge">Golden Skybridge</Link>
                  <Link href="/adventures/banffgondola">Banff Gondola</Link>
                  <Link href="/adventures/lakelouisegondola">
                    Lake Louise Gondola
                  </Link>
                  <Link href="/adventures/goldengondola">Golden Gondola</Link>
                  <Link href="/adventures/jasperskytram">Jasper Skytram</Link>
                  <Link href="/adventures/columbiaicefield">
                    Columbia Icefield
                  </Link>
                  <Link href="/adventures/skywalk">Skywalk</Link>
                </div>
                <div className="col">
                  <Link href="/adventures/lakeminnewanka">Lake Minnewanka</Link>
                  <Link href="/adventures/malignelake">Maligne Lake</Link>
                </div>
              </div>
            </div>
          </div>
          <Link href="/combos">Combos</Link>
          <Link href="https://epicadventuregroup.rezdy.com/">
            <a target="_blank" rel="noreferrer">
              <button className="bookNow">Book Now</button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
