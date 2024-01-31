import { useState } from "react";

export default function Header() {
  const logoDark = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="146.001"
      height="43.362"
      viewBox="0 0 146.001 43.362"
    >
      <g transform="translate(14.333 -9.743)">
        <g transform="translate(-14.333 9.743)">
          <path
            d="M413.914,104.991v5.851h-11.7V99.14h5.851v5.851Z"
            transform="translate(-273.761 -67.479)"
            fill="#009ed1"
          />
          <rect
            width="5.851"
            height="5.851"
            transform="translate(140.15 25.81)"
            fill="#009ed1"
          />
          <path
            d="M30.163,18.012V0H0V43.359H37.79V18.012ZM7.626,7.626H22.537V18.012H7.626Zm22.537,28.1H7.626V25.638H30.163Z"
            fill="#252f38"
          />
          <path
            d="M145.94,0h7.55V35.733h19.58v7.626H145.94Z"
            transform="translate(-99.333)"
            fill="#252f38"
          />
          <rect
            width="7.626"
            height="43.359"
            transform="translate(81.647)"
            fill="#252f38"
          />
          <path
            d="M307.76,0V43.359h7.594V25.795h22.569V0ZM330.3,18.181H315.354V7.642H330.3Z"
            transform="translate(-209.475)"
            fill="#252f38"
          />
        </g>
      </g>
    </svg>
  );

  const logo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="146.001"
      height="43.362"
      viewBox="0 0 146.001 43.362"
    >
      <g transform="translate(14.333 -9.743)">
        <g transform="translate(-14.333 9.743)">
          <path
            d="M413.914,104.991v5.851h-11.7V99.14h5.851v5.851Z"
            transform="translate(-273.761 -67.479)"
            fill="#009ed1"
          />
          <rect
            width="5.851"
            height="5.851"
            transform="translate(140.15 25.81)"
            fill="#009ed1"
          />
          <path
            d="M30.163,18.012V0H0V43.359H37.79V18.012ZM7.626,7.626H22.537V18.012H7.626Zm22.537,28.1H7.626V25.638H30.163Z"
            fill="#fff"
          />
          <path
            d="M145.94,0h7.55V35.733h19.58v7.626H145.94Z"
            transform="translate(-99.333)"
            fill="#fff"
          />
          <rect
            width="7.626"
            height="43.359"
            transform="translate(81.647)"
            fill="#fff"
          />
          <path
            d="M307.76,0V43.359h7.594V25.795h22.569V0ZM330.3,18.181H315.354V7.642H330.3Z"
            transform="translate(-209.475)"
            fill="#fff"
          />
        </g>
      </g>
    </svg>
  );

  const arrowDropDown = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path d="M480-360 280-560h400L480-360Z" />
    </svg>
  );

  const [navDropDown1IsOpen, setNavDropDown1IsOpen] = useState(false);
  const [navDropDown2IsOpen, setNavDropDown2IsOpen] = useState(false);

  function handleShowDropDown1() {
    setNavDropDown1IsOpen(true);
    setNavDropDown2IsOpen(false);
  }

  function handleHideDropDown1() {
    setNavDropDown1IsOpen(false);
  }

  function handleShowDropDown2() {
    setNavDropDown1IsOpen(false);
    setNavDropDown2IsOpen(true);
  }

  function handleHideDropDown2() {
    setNavDropDown2IsOpen(false);
  }

  return (
    <header className="header">
      <div className="logo-div">{logoDark}</div>
      <nav className="nav">
        <ul className="nav-ul">
          <li className="nav-link">
            <a className="nav-link-text">Jobs</a>
          </li>

          <li
            onMouseEnter={handleShowDropDown1}
            onMouseLeave={handleHideDropDown1}
            className="nav-link"
          >
            <a href="#" className="nav-link-text">
              Working @ Blip
            </a>
            <span
              className={`nav-drop-down-svg ${
                navDropDown1IsOpen && "nav-drop-down-svg-rotation"
              }`}
            >
              {arrowDropDown}
            </span>
            <div
              className={`nav-drop-down-menu nav-drop-down-menu-width-1 ${
                navDropDown1IsOpen && "nav-drop-down-menu-visible"
              }`}
            >
              <ul className="nav-drop-down-menu-ul">
                <li>
                  <a className="nav-drop-down-text">How Blip are you?</a>
                </li>
                <li>
                  <a className="nav-drop-down-text">Perks and benefits</a>
                </li>
                <li>
                  <a className="nav-drop-down-text">Ways of working</a>
                </li>
                <li>
                  <a className="nav-drop-down-text">Learning and development</a>
                </li>
                <li>
                  <a className="nav-drop-down-text">
                    Diversity, equity and inclusion
                  </a>
                </li>
                <li>
                  <a className="nav-drop-down-text">Communities</a>
                </li>
                <li>
                  <a className="nav-drop-down-text">CSR and sustainability</a>
                </li>
              </ul>
            </div>
          </li>

          <li
            className="nav-link"
            onMouseEnter={handleShowDropDown2}
            onMouseLeave={handleHideDropDown2}
          >
            <a href="#" className="nav-link-text">
              Our Teams
            </a>
            <span
              className={`nav-drop-down-svg ${
                navDropDown2IsOpen && "nav-drop-down-svg-rotation"
              }`}
            >
              {arrowDropDown}
            </span>

            <div
              className={`nav-drop-down-menu nav-drop-down-menu-width-2 ${
                navDropDown2IsOpen && "nav-drop-down-menu-visible"
              }`}
            >
              <ul className="nav-drop-down-menu-ul">
                <li>
                  <a className="nav-drop-down-text">Blip Teams</a>
                </li>
                <li>
                  <a className="nav-drop-down-text">Technology</a>
                </li>
                <li>
                  <a className="nav-drop-down-text">Corporate</a>
                </li>
                <li>
                  <a className="nav-drop-down-text">Early Talent</a>
                </li>
              </ul>
            </div>
          </li>

          <li className="nav-link">
            <a href="#" className="nav-link-text">
              Blogs
            </a>
          </li>

          <li className="nav-link">
            <a href="#" className="nav-link-text">
              About Us
            </a>
          </li>

          <li className="nav-link">
            <a href="#" className="nav-link-text">
              About Flutter
            </a>
          </li>
        </ul>
        <btn className="nav-btn">JOIN US</btn>
      </nav>
    </header>
  );
}
