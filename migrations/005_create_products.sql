-- 005_create_products.sql
CREATE TABLE products (
    product_id  SERIAL PRIMARY KEY,
    sku         VARCHAR NOT NULL UNIQUE,
    unit_cost   NUMERIC NOT NULL CHECK (unit_cost >= 0),
    unit_price  NUMERIC NOT NULL CHECK (unit_price >= 0),
    created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);
