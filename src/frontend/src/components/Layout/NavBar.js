import { Link } from "react-router-dom";
const NavBar = (props) => {
  return (
    <>
      {props.children}
      <nav className={props.className}>
        <ul>
          {props.links.map((list, key) => {
            return <li onClick={props.handleNavBarClick}>{list}</li>;
          })}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
