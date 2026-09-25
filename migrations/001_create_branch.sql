-- 001_create_branch.sql
CREATE TABLE branch (
    branch_id   SERIAL PRIMARY KEY,
    address     VARCHAR NOT NULL,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);
