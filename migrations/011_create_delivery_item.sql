-- 011_create_delivery_item.sql
CREATE TABLE delivery_item (
    delivery_item_id   SERIAL PRIMARY KEY,
    delivery_id         INT NOT NULL REFERENCES deliveries(delivery_id),
    product_id           INT NOT NULL REFERENCES products(product_id),
    quantity_received   INT NOT NULL CHECK (quantity_received > 0)
);

CREATE INDEX idx_delivery_item_delivery_id ON delivery_item(delivery_id);
