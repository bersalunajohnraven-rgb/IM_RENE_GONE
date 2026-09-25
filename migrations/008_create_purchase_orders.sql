-- 008_create_purchase_orders.sql
CREATE TABLE purchase_orders (
    order_id    SERIAL PRIMARY KEY,
    supplier_id INT NOT NULL REFERENCES suppliers(supplier_id),
    branch_id   INT NOT NULL REFERENCES branch(branch_id),
    request_id  INT NULL REFERENCES restock_requests(request_id), -- nullable: not every PO starts from a request
    status      VARCHAR NOT NULL DEFAULT 'open'
                CHECK (status IN ('open', 'partially_received', 'received', 'cancelled')),
    created_by  INT NOT NULL REFERENCES users(user_id),
    created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_purchase_orders_branch_id ON purchase_orders(branch_id);
CREATE INDEX idx_purchase_orders_supplier_id ON purchase_orders(supplier_id);
CREATE INDEX idx_purchase_orders_status ON purchase_orders(status);
