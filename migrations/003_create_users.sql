-- 003_create_users.sql
CREATE TABLE users (
    user_id         SERIAL PRIMARY KEY,
    full_name       VARCHAR NOT NULL,
    email           VARCHAR NOT NULL UNIQUE,
    password_hash   TEXT NOT NULL,
    role_id         INT NOT NULL REFERENCES roles(role_id),
    branch_id       INT NULL REFERENCES branch(branch_id), -- nullable: admins aren't tied to a branch
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_users_role_id ON users(role_id);
CREATE INDEX idx_users_branch_id ON users(branch_id);
