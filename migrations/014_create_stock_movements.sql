-- 014_create_stock_movements.sql
CREATE TABLE stock_movements (
    movement_id     SERIAL PRIMARY KEY,
    product_id      INT NOT NULL REFERENCES products(product_id),
    branch_id       INT NOT NULL REFERENCES branch(branch_id),
    change_qty      INT NOT NULL, -- positive = stock in, negative = stock out
    reference_id    INT NULL,     -- polymorphic: sale_id or delivery_id, not FK-constrained
    reason          VARCHAR NOT NULL
                    CHECK (reason IN ('sale', 'delivery', 'manual_adjustment')),
    actor_id        INT NOT NULL REFERENCES users(user_id),
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_stock_movements_product_branch ON stock_movements(product_id, branch_id);
CREATE INDEX idx_stock_movements_reason ON stock_movements(reason);
