-- 006_create_inventory.sql
CREATE TABLE inventory (
    inventory_id        SERIAL PRIMARY KEY,
    product_id          INT NOT NULL REFERENCES products(product_id),
    branch_id           INT NOT NULL REFERENCES branch(branch_id),
    quantity            INT NOT NULL DEFAULT 0 CHECK (quantity >= 0),
    reorder_threshold   INT NOT NULL DEFAULT 0,
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT now(),

    UNIQUE (product_id, branch_id) -- one stock row per product per branch
);

CREATE INDEX idx_inventory_branch_id ON inventory(branch_id);
