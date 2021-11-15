import Menu from "./Menu";
import classes from "./Menus.module.css";
import useHttp from "../Hooks/useHttp";
import shopImage from "../../assets/shop.jpg";
import Spinner from "../UI/Spinner";

const MenuImage = () => {
  return (
    <div className={classes["main-image"]}>
      <img src={shopImage} alt="FOOD" />
    </div>
  );
};
const Menus = () => {
  const { loading, error, data } = useHttp({
    url: `${process.env.REACT_APP_API_URL}/menus`,
    type: "GET",
  });
  const menu_list = data
    ? data.map((menu) => {
        return (
          <Menu
            key={menu.id}
            menu_id={menu.id}
            title={menu.title}
            description={menu.content}
          />
        );
      })
    : [];
  console.log(`Loading received: ${loading}`);
  return (
    <>
      <MenuImage />
      <Spinner loading={loading} size={150}/>
      {!error && !loading && menu_list}
    </>
  );
};
export default Menus;
