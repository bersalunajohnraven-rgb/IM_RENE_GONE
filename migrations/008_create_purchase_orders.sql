-- 008_create_purchase_orders.sql
CREATE TABLE purchase_orders (
    "orderID"       UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "supplierID"    UUID NOT NULL REFERENCES suppliers("supplierID"),
    "branchID"      UUID NOT NULL REFERENCES branch("branchID"),
    "requestID"     UUID REFERENCES restock_requests("requestID"),
    status          VARCHAR NOT NULL DEFAULT 'open',
    created_by      UUID NOT NULL REFERENCES users("userID"),
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_purchase_orders_branchID ON purchase_orders("branchID");
CREATE INDEX idx_purchase_orders_supplierID ON purchase_orders("supplierID");
CREATE INDEX idx_purchase_orders_requestID ON purchase_orders("requestID");
CREATE INDEX idx_purchase_orders_created_by ON purchase_orders(created_by);
