-- 013_create_sale_items.sql
CREATE TABLE sale_items (
    "itemID"        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "saleID"        UUID NOT NULL REFERENCES sales("saleID") ON DELETE CASCADE,
    "productID"     UUID NOT NULL REFERENCES products("productID"),
    quantity        INT NOT NULL,
    unit_price      NUMERIC NOT NULL
);

CREATE INDEX idx_sale_items_saleID ON sale_items("saleID");
CREATE INDEX idx_sale_items_productID ON sale_items("productID");
