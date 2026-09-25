-- 009_create_purchase_order_items.sql
CREATE TABLE purchase_order_items (
    "purchase_itemID"   UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "orderID"           UUID NOT NULL REFERENCES purchase_orders("orderID") ON DELETE CASCADE,
    "productID"         UUID NOT NULL REFERENCES products("productID"),
    quantity_ordered    INT NOT NULL,
    unit_cost           NUMERIC NOT NULL
);

CREATE INDEX idx_purchase_order_items_orderID ON purchase_order_items("orderID");
CREATE INDEX idx_purchase_order_items_productID ON purchase_order_items("productID");
