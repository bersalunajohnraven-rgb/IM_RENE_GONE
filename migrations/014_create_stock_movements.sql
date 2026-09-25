-- 014_create_stock_movements.sql
CREATE TABLE stock_movements (
    "movementID"    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "productID"     UUID NOT NULL REFERENCES products("productID") ON DELETE CASCADE,
    "branchID"      UUID NOT NULL REFERENCES branch("branchID") ON DELETE CASCADE,
    change_qty      INT NOT NULL,
    reference_id    UUID,
    reason          VARCHAR NOT NULL,
    actor_id        UUID REFERENCES users("userID"),
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_stock_movements_productID ON stock_movements("productID");
CREATE INDEX idx_stock_movements_branchID ON stock_movements("branchID");
CREATE INDEX idx_stock_movements_actor_id ON stock_movements(actor_id);
