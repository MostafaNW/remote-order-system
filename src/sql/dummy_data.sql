insert into restaurant.meal_item(name, price, content)
values('tiger roll', 3.49, 'This is healthy');
insert into restaurant.meal_item(name, price, content)
values('poutine', 5.58, 'this is may not be healthy');
insert into restaurant.meal_item(name, price, content)
values(
        'Manga Smoothie',
        5.58,
        'This is may not be healthy'
    );
--menus
insert into restaurant.menu(title, content)
values('Sushi', 'Delicious sushi');
insert into restaurant.menu(title, content)
values('Drinks', 'Delicious drinks');
--menu item
insert into restaurant.menu_item(menu_id,meal_item_id) values (1, 1);
insert into restaurant.menu_item(menu_id,meal_item_id) values (1, 2);
insert into restaurant.menu_item(menu_id,meal_item_id) values (2, 3);