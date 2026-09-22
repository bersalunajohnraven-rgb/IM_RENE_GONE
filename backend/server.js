const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "StockLine backend is running!"
    });
});

app.listen(PORT, () => {
    console.log(`StockLine backend running at http://localhost:${PORT}`);
});