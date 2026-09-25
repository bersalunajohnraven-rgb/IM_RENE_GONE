const express = require('express');

const productRoutes = require('./src/routes/productRoutes');
const inventoryRoutes = require('./src/routes/inventoryRoutes');
const branchRoutes = require('./src/routes/branchRoutes');
const supplierRoutes = require('./src/routes/supplierRoutes');
const purchaseOrderRoutes = require('./src/routes/purchaseOrderRoutes');
const roleRoutes = require('./src/routes/roleRoutes');
const userRoutes = require('./src/routes/userRoutes');
const purchaseOrderItemRoutes = require('./src/routes/purchaseOrderItemRoutes');

const app = express();

app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/branches', branchRoutes);
app.use('/api/suppliers', supplierRoutes);
app.use('/api/purchase-orders', purchaseOrderRoutes);
app.use('/api/roles', roleRoutes);
app.use('/api/users', userRoutes);
app.use('/api/purchase-order-items', purchaseOrderItemRoutes);

app.get('/', (req, res) => {
    res.json({
        message: 'StockLine backend is running!'
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`StockLine backend is running on port ${PORT}`);
});