-- 003_create_users.sql
CREATE TABLE users (
    "userID"        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "firstName"     VARCHAR NOT NULL,
    "middleName"    VARCHAR,
    "lastName"      VARCHAR NOT NULL,
    email           VARCHAR NOT NULL UNIQUE,
    password_hash   TEXT NOT NULL,
    "roleID"        UUID NOT NULL REFERENCES roles("roleID"),
    "branchID"      UUID REFERENCES branch("branchID"),
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_users_roleID ON users("roleID");
CREATE INDEX idx_users_branchID ON users("branchID");
