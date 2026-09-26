const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getAllSales = async () => {
    return await prisma.sales.findMany({
        include: {
            branch: true,
            users: true,
            sale_items: {
                include: {
                    products: true
                }
            }
        },
        orderBy: {
            created_at: 'desc'
        }
    });
};

const getSaleById = async (saleID) => {
    return await prisma.sales.findUnique({
        where: {
            saleID
        },
        include: {
            branch: true,
            users: true,
            sale_items: {
                include: {
                    products: true
                }
            }
        }
    });
};

const createSale = async (data) => {
    return await prisma.sales.create({
        data: {
            cashierID: data.cashierID,
            branchID: data.branchID,
            total_amount: data.total_amount || 0
        }
    });
};

const updateSale = async (saleID, data) => {
    return await prisma.sales.update({
        where: {
            saleID
        },
        data: {
            cashierID: data.cashierID,
            branchID: data.branchID,
            total_amount: data.total_amount
        }
    });
};

const deleteSale = async (saleID) => {
    return await prisma.sales.delete({
        where: {
            saleID
        }
    });
};

module.exports = {
    getAllSales,
    getSaleById,
    createSale,
    updateSale,
    deleteSale
};