-- 012_create_sales.sql
CREATE TABLE sales (
    "saleID"        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "cashierID"     UUID NOT NULL REFERENCES users("userID"),
    "branchID"      UUID NOT NULL REFERENCES branch("branchID"),
    total_amount    NUMERIC NOT NULL DEFAULT 0,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_sales_branchID ON sales("branchID");
CREATE INDEX idx_sales_cashierID ON sales("cashierID");
