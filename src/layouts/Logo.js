// //import { ReactComponent as LogoDark } from "../assets/images/logos/CareerLink-logos_transparent.png";
// import LogoDark from "../assets/images/logos/CareerLink-logos_transparent.png";
// import { Link } from "react-router-dom";

// const Logo = () => {
//   return (
//     <Link to="/">
//       <LogoDark />
//     </Link>
//   );
// };

// export default Logo;

import React from "react";
import { Link } from "react-router-dom";
import LogoDark from "../assets/images/logos/CareerLink-logos - Copy.jpeg";

const Logo = () => {
  return (
    <Link to="/">
      <img
        src={LogoDark}
        alt="Logo"
        width="120" // Set the desired width
        height="65" // Set the desired height
      />
    </Link>
  );
};

export default Logo;
