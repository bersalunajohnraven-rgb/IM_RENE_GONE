-- 013_create_sale_items.sql
CREATE TABLE sale_items (
    item_id     SERIAL PRIMARY KEY,
    sale_id     INT NOT NULL REFERENCES sales(sale_id),
    product_id  INT NOT NULL REFERENCES products(product_id),
    quantity    INT NOT NULL CHECK (quantity > 0),
    unit_price  NUMERIC NOT NULL CHECK (unit_price >= 0)
);

CREATE INDEX idx_sale_items_sale_id ON sale_items(sale_id);
