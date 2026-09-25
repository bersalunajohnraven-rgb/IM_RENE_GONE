-- 005_create_products.sql
CREATE TABLE products (
    "productID" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    sku         VARCHAR NOT NULL UNIQUE,
    name        VARCHAR NOT NULL,
    unit_cost   NUMERIC NOT NULL,
    unit_price  NUMERIC NOT NULL,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);
