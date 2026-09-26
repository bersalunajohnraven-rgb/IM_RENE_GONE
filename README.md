# StockLine — Multi-Branch Inventory and Sales Management System

Advanced Database Systems course project.

## Overview

StockLine is a database-backed inventory and sales management system for businesses operating across multiple branches. It centralizes product, stock, sales, supplier, purchasing, and delivery records while keeping each branch's inventory separately traceable.

The system reduces manual inventory work by detecting low-stock conditions in the database, creating restock requests automatically, recording inventory changes for auditing, and protecting restock fulfillment from duplicate processing during concurrent transactions.

## Development Work

- Updated the SQL migration files for branches, roles, users, suppliers, products, inventory, restock requests, purchase orders, deliveries, sales, and stock movements.
- Updated the Prisma schema and model relationships to match the database, including delivery line items and separate user name fields.
- Added API routes, controllers, and services, organized by feature so each area handles its own database operations.
- Added create, list, view-by-ID, update, and delete API operations for the main records and line items.
- Connected the feature routes to the Express server and added JSON request handling.

The backend API includes:

- `/api/branches`, `/api/roles`, `/api/users`, and `/api/suppliers`
- `/api/products` and `/api/inventory`
- `/api/purchase-orders` and `/api/purchase-order-items`
- `/api/deliveries` and `/api/delivery-items`
- `/api/sales` and `/api/sale-items`
- `/api/restock-requests` and `/api/stock-movements`

Each endpoint supports the relevant collection and individual-record operations. For example, `GET /api/products` lists products, `GET /api/products/:id` gets one product, `POST /api/products` adds a product, `PUT /api/products/:id` updates it, and `DELETE /api/products/:id` removes it.

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

