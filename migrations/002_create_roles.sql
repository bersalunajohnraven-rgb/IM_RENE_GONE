-- 002_create_roles.sql
CREATE TABLE roles (
    "roleID"    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    role_name   VARCHAR NOT NULL UNIQUE
);
