-- 002_create_roles.sql
CREATE TABLE roles (
    role_id     SERIAL PRIMARY KEY,
    role_name   VARCHAR NOT NULL UNIQUE
                CHECK (role_name IN ('admin', 'branch_manager', 'cashier'))
);
