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
              <Link href="/adventures">
                <a onClick={closeMenu}>Adventures</a>
              </Link>
            </li>
            <li>
              <Link href="/adventures/combos">
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
                </div>
                <div className="col">
                  <h3>Stay</h3>
                  <Link href="/stay/canadianrockies">Banff</Link>
                  <Link href="/stay/banffnationalpark">Canmore</Link>
                  <Link href="/stay/canmore">Jasper</Link>
                  <Link href="/stay/golden">Golden</Link>
                  <Link href="/stay/golden">Lake Louise</Link>
                </div>
                <div className="col">
                  <h3>Eat</h3>
                  <Link href="/stay/canadianrockies">Banff</Link>
                  <Link href="/eat/banffnationalpark">Canmore</Link>
                  <Link href="/eat/canmore">Jasper</Link>
                  <Link href="/eat/golden">Golden</Link>
                  <Link href="/eat/golden">Lake Louise</Link>
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
          <Link href="/adventures/combos">Combos</Link>
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
