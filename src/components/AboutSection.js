import home from "../images/about.png";

//styled components
import { Hidden, LayoutStyle, DescriptionStyle, ImageStyle } from "../styles";
//framer motion

const AboutSection = () => {
  return (
    <LayoutStyle>
      <DescriptionStyle>
        <div>
          <Hidden>
            <h2>We work to make</h2>
          </Hidden>
          <Hidden>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hidden>
          <Hidden>
            <h2>true.</h2>
          </Hidden>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professional with amazing skills
        </p>
        <button>Contact Us</button>
      </DescriptionStyle>
      <ImageStyle>
        <img src={home} alt="a fresh looking black guy on white shirt" />
      </ImageStyle>
    </LayoutStyle>
  );
};

export default AboutSection;
