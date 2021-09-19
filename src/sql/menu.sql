DROP TABLE IF EXISTS restaurant.menu;
CREATE TABLE IF NOT EXISTS restaurant.menu (
    id serial PRIMARY KEY,
    title VARCHAR NOT NULL,
    content VARCHAR,
    creation_date TIMESTAMPTZ NOT NULL DEFAULT NOW()
)