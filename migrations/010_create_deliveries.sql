-- 010_create_deliveries.sql
CREATE TABLE deliveries (
    delivery_id     SERIAL PRIMARY KEY,
    order_id        INT NOT NULL REFERENCES purchase_orders(order_id),
    branch_id       INT NOT NULL REFERENCES branch(branch_id),
    received_by     INT NOT NULL REFERENCES users(user_id),
    received_at     TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_deliveries_order_id ON deliveries(order_id);
CREATE INDEX idx_deliveries_branch_id ON deliveries(branch_id);
