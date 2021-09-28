DROP TABLE IF EXISTS restaurant.menu_item;
CREATE TABLE restaurant.menu_item(
    menu_id integer REFERENCES restaurant.menu(id),
    meal_item_id integer REFERENCES restaurant.meal_item(id),
    PRIMARY KEY (menu_id, meal_item_id)
);