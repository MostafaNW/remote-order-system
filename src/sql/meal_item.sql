CREATE SCHEMA IF NOT EXISTS restaurant;
CREATE TABLE IF NOT EXISTS restaurant.meal_item (
    id bigserial PRIMARY KEY,
    name VARCHAR NOT NULL,
    price FLOAT,
    content VARCHAR,
    creation_date TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
