-- 001_create_branch.sql
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE branch (
    "branchID"  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name        VARCHAR NOT NULL,
    address     VARCHAR,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);
