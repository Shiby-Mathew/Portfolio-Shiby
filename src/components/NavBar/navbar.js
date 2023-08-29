import React from "react";
import "./navbar.css";

import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <img src={logo} alt="logo" className="logo" /> */}
      <div className="desktopMenu">
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">About</Link>
        <Link className="desktopMenuListItem">Portfolio</Link>
        <Link className="desktopMenuListItem">Contact Me</Link>
      </div>
      {/* <button className="desktopMenuButton">
        <img src="" alt="" className="desktopMenuImg" />
        Contact Me
      </button> */}
    </nav>
  );
};
export default Navbar;

// import React from "react"
// const navbar=()=>{
//     return(
//         <div>navbar</div>
//     )
// }
// export default navbar
