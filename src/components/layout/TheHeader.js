import "../../styles/layout/the-header.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import debounce from "../../helper-functions/debounce";

function TheHeader() {
  const [yOffset, setYOffset] = useState(0);
  const addBackground = { backgroundColor: "#fff" };
  const removeBackground = { backgroundColor: "transparent" };
  const checkSlide = () => {
    if (window.scrollY > 10) return setYOffset(1);
    return setYOffset(0);
  };

  window.addEventListener("scroll", debounce(checkSlide));

  return (
    <div
      className="header-container"
      style={yOffset !== 0 ? addBackground : removeBackground}
    >
      <div className="header-container__motto">
        <p>Comfort</p>
        <p>For</p>
        <p>You</p>
      </div>

      <div className="header-container__logo">
          <Link to="/"><h2>Octane.</h2></Link>
      </div>

      <div className="header-container__cart">
        <p>Cart(0)</p>
      </div>
    </div>
  );
}

export default TheHeader;
