# StockLine — Multi-Branch Inventory and Sales Management System

Advanced Database Systems course project.

## Overview

StockLine is a database-backed inventory and sales management system for businesses operating across multiple branches. It centralizes product, stock, sales, supplier, purchasing, and delivery records while keeping each branch's inventory separately traceable.

The system reduces manual inventory work by detecting low-stock conditions in the database, creating restock requests automatically, recording inventory changes for auditing, and protecting restock fulfillment from duplicate processing during concurrent transactions.

## Core Features

- Branch-specific inventory tracking for every product
- Role-based users for administrators, branch managers, and cashiers
- Product catalog with SKU, cost, and selling price information
- Sales transactions with item-level product quantities and prices
- Supplier and purchase order management
- Delivery receiving records that can be linked to purchase orders
- Automatic restock request generation when inventory falls below its reorder threshold
- Inventory audit logging through database triggers
- Atomic restock fulfillment through a PostgreSQL stored procedure
- Stock movement history for sales, deliveries, and manual adjustments
- Referential integrity, validation constraints, foreign keys, and indexed relationships

## Tech Stack

- PostgreSQL / Supabase
- Express.js
- Prisma ORM
- Node.js

## Database

The complete schema is available in [`migrations/001_init_schema.sql`](./migrations/001_init_schema.sql), with the Prisma representation in [`backend/prisma/schema.prisma`](./backend/prisma/schema.prisma).

The database is organized into the following normalized entities:

- `roles` — supported system roles
- `branch` — business branch locations
- `users` — authenticated users assigned to roles and, when applicable, a branch
- `products` — products identified by a unique SKU
- `inventory` — product quantities and reorder thresholds per branch
- `sales` and `sale_items` — sales transactions and their line items
- `suppliers` — supplier records and contact information
- `purchase_orders` and `purchase_order_items` — branch purchasing records
- `deliveries` and `delivery_item` — received stock and delivery line items
- `restock_requests` — automatically generated or manually managed replenishment requests
- `stock_movements` — inventory movement history
- `audit_logs` — before-and-after records for inventory updates

The schema uses UUID primary keys, foreign-key relationships, unique constraints, check constraints, and indexes on foreign-key columns to preserve data consistency and support efficient queries.



