import { Link } from "react-router-dom";
import "../styles/pages/home-page.css";

function homePage() {
  document.title = "Octane | Home of comfort for your feet"
  
  return (
    <div className="homepage-container">
      <div className="homepage-conatiner__hero">
        <div className="hero-item">
          <img
            src="https://images.pexels.com/photos/4462782/pexels-photo-4462782.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="a shoe"
          />
          <p>
            Peep into comfort by shopping our eco-friendly shoes made from
            cotton and wool and built for the total comfort of your feet.
          </p>
          <Link to="/products">
            <button className="btn">Shop Shoes</button>
          </Link>
        </div>

        <div className="hero-item">
          <img
            src="https://images.pexels.com/photos/4431401/pexels-photo-4431401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="face mask"
          />
          <p>
            Keep yourself and everyone around you safe with our custom made
            emission free N12 face-mask which fits effortlessly on your face.
            guaranteed to keep you safe from the COVID all day long
          </p>
          <Link to="/products">
            <button className="btn">Shop Masks</button>
          </Link>
        </div>
      </div>

      <div className="homepage-container__showcase">
        <h1>Shop the collection</h1>
        <div className="homepage-container__showcase-slider">
          <div className="slider-item">
            <img src="https://tinyurl.com/52a3kxs6" alt="model 001" loading="lazy"/>
            <h3> Model #001</h3>
            <p>Crafted from wool to provide complete comfort for the heel.</p>
            <Link to="/products">
              <button className="btn">Shop Now</button>
            </Link>
          </div>

          <div className="slider-item">
            <img src="https://tinyurl.com/38hsces4" alt="model 002" loading="lazy"/>
            <h3> Model #002</h3>
            <p>Cotton based sole to ease stress on walking.</p>
            <Link to="/products">
              <button className="btn">Shop Now</button>
            </Link>
          </div>

          <div className="slider-item">
            <img src="https://tinyurl.com/3fsudmth" alt="model 003" loading="lazy"/>
            <h3> Model #003</h3>
            <p>Fine tuned sneaker perfect for summer.</p>
            <Link to="/products">
              <button className="btn">Shop Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default homePage;
