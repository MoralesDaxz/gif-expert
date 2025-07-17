
import { NavLink } from "react-router";

const Landing = () => {
  return (
    <main>
      <h1>Home</h1>
      <NavLink to={"/gif"}>App Gif</NavLink>
    </main>
  );
};

export default Landing;
