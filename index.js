const express = require("express");
const app = express();
const pool = require("./db");

app.get("/branches/", async (req, res) => {

    try {
        // res.json(req.query)

        const {q} = req.query;
        const {limit} = req.query;
        const {offset} = req.query;
        
        const branch = await pool.query("SELECT * FROM branches WHERE 'branch' ILIKE $1 Order By 'ifsc' LIMIT $2 OFFSET$3 ",[`%${q}%`],[`${limit}`],[`${offset}`]);

        // console.log(branch);
        // const branch = await pool.query("SELECT * FROM branches WHERE");

        res.json(branch.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(5000, () => {
    console.log("Listening on port 5000");
})