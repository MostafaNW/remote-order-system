DROP TABLE IF EXISTS restaurant.meal_item;
CREATE TABLE restaurant.meal_item (
    id serial PRIMARY KEY,
    name VARCHAR NOT NULL,
    price FLOAT,
    content VARCHAR,
    creation_date TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
