-- 010_create_deliveries.sql
CREATE TABLE deliveries (
    "deliveryID"    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "orderID"       UUID NOT NULL REFERENCES purchase_orders("orderID"),
    "branchID"      UUID NOT NULL REFERENCES branch("branchID"),
    received_by     UUID REFERENCES users("userID"),
    received_at     TIMESTAMPTZ
);

CREATE INDEX idx_deliveries_orderID ON deliveries("orderID");
CREATE INDEX idx_deliveries_branchID ON deliveries("branchID");
CREATE INDEX idx_deliveries_received_by ON deliveries(received_by);
