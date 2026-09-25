-- 004_create_suppliers.sql
CREATE TABLE suppliers (
    "supplierID"    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name            VARCHAR NOT NULL,
    contact_info    VARCHAR
);
