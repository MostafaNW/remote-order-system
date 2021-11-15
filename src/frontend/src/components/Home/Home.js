import classes from "./Home.module.css";
import useOnScreen from "../Hooks/useOnScreen";
import { useRef } from "react";
const MainPage = () => {
  return (
    <>
      <div
        className={`${classes["main-container"]} ${classes["welcome-image"]}`}
      >
        <h2>Welcome</h2>
      </div>
    </>
  );
};

const About = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  const aboutClasses = `${classes["main-container"]} ${classes["about-image"]} `;
  return (
    <div className={aboutClasses}>
      <div className={classes.container}>
        <p ref={ref} className={isVisible ? classes.animate : ""}>
          Incididunt esse incididunt ullamco esse esse aute laborum fugiat
          fugiat Lorem anim deserunt irure. Velit aliquip cillum occaecat nulla
          voluptate. Veniam pariatur Lorem sint laborum. Officia ex fugiat
          laboris amet veniam elit non aliquip esse fugiat ea tempor.
        </p>
      </div>
    </div>
  );
};
const Home = () => {
  return (
    <>
      <MainPage />
      <About />
    </>
  );
};

export default Home;
