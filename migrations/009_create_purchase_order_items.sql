-- 009_create_purchase_order_items.sql
CREATE TABLE purchase_order_items (
    purchase_item_id    SERIAL PRIMARY KEY,
    order_id            INT NOT NULL REFERENCES purchase_orders(order_id),
    product_id          INT NOT NULL REFERENCES products(product_id),
    quantity_ordered    INT NOT NULL CHECK (quantity_ordered > 0),
    unit_cost           NUMERIC NOT NULL CHECK (unit_cost >= 0)
);

CREATE INDEX idx_purchase_order_items_order_id ON purchase_order_items(order_id);
