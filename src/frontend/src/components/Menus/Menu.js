import classes from "./Menu.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import MenuSummary from "./MenuSummary";
import useHttp from "../Hooks/useHttp";
import Spinner from "../UI/Spinner";

const Menu = (props) => {
  const { loading, data, error } = useHttp({
    url: `${process.env.REACT_APP_API_URL}/items/${props.menu_id}`,
    type: "GET",
  });
  console.log(props.title);
  const meals = data
    ? data.map((item) => {
        return (
          <MealItem
            key={item.id}
            menu_id={props.menu_id}
            id={item.id}
            name={item.name}
            description={item.content}
            price={item.price}
          />
        );
      })
    : [];

  return (
    <>
      <MenuSummary title={props.title} description={props.description} />
      <section className={classes.meals}>
        <Card>
          <Spinner loading={loading} size={150} />
          <ul>{meals}</ul>
        </Card>
      </section>
    </>
  );
};
export default Menu;
