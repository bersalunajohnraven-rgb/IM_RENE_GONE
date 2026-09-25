-- 012_create_sales.sql
CREATE TABLE sales (
    sale_id         SERIAL PRIMARY KEY,
    cashier_id      INT NOT NULL REFERENCES users(user_id),
    branch_id       INT NOT NULL REFERENCES branch(branch_id),
    total_amount    NUMERIC NOT NULL CHECK (total_amount >= 0),
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_sales_branch_id ON sales(branch_id);
CREATE INDEX idx_sales_cashier_id ON sales(cashier_id);
