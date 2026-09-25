-- 006_create_inventory.sql
CREATE TABLE inventory (
    "inventoryID"       UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "productID"         UUID NOT NULL REFERENCES products("productID") ON DELETE CASCADE,
    "branchID"          UUID NOT NULL REFERENCES branch("branchID") ON DELETE CASCADE,
    quantity            INT NOT NULL DEFAULT 0,
    reorder_threshold   INT NOT NULL DEFAULT 0,
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT now(),
    UNIQUE ("productID", "branchID")
);

CREATE INDEX idx_inventory_branchID ON inventory("branchID");
CREATE INDEX idx_inventory_productID ON inventory("productID");
