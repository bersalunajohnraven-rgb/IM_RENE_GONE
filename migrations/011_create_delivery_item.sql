-- 011_create_delivery_item.sql
CREATE TABLE delivery_items (
    "delivery_itemID"   UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "deliveryID"        UUID NOT NULL REFERENCES deliveries("deliveryID") ON DELETE CASCADE,
    "productID"         UUID NOT NULL REFERENCES products("productID"),
    quantity_received   INT NOT NULL
);

CREATE INDEX idx_delivery_items_deliveryID ON delivery_items("deliveryID");
CREATE INDEX idx_delivery_items_productID ON delivery_items("productID");
