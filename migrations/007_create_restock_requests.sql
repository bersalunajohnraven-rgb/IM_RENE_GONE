-- 007_create_restock_requests.sql
CREATE TABLE restock_requests (
    "requestID"     UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "productID"     UUID NOT NULL REFERENCES products("productID"),
    "branchID"      UUID NOT NULL REFERENCES branch("branchID") ON DELETE CASCADE,
    request_qty     INT NOT NULL,
    status          VARCHAR NOT NULL DEFAULT 'pending',
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
    approved_by     UUID REFERENCES users("userID"),
    approved_at     TIMESTAMPTZ
);

CREATE INDEX idx_restock_requests_productID ON restock_requests("productID");
CREATE INDEX idx_restock_requests_branchID ON restock_requests("branchID");
CREATE INDEX idx_restock_requests_approved_by ON restock_requests(approved_by);
