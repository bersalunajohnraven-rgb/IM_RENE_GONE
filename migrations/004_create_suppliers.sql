-- 004_create_suppliers.sql
CREATE TABLE suppliers (
    supplier_id     SERIAL PRIMARY KEY,
    contact_info    VARCHAR NOT NULL
);
