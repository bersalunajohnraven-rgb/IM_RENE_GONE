-- 007_create_restock_requests.sql
CREATE TABLE restock_requests (
    request_id      SERIAL PRIMARY KEY,
    product_id      INT NOT NULL REFERENCES products(product_id),
    branch_id       INT NOT NULL REFERENCES branch(branch_id),
    request_qty     INT NOT NULL CHECK (request_qty > 0),
    status          VARCHAR NOT NULL DEFAULT 'pending'
                    CHECK (status IN ('pending', 'approved', 'failed', 'fulfilled')),
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
    approved_by     INT NULL REFERENCES users(user_id),
    approved_at     TIMESTAMPTZ NULL
);

CREATE INDEX idx_restock_requests_branch_id ON restock_requests(branch_id);
CREATE INDEX idx_restock_requests_status ON restock_requests(status);
