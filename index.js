const express = require("express");
const { off } = require("./db1");
const app = express();
const pool = require("./db1");

app.get("/api/branches/autocomplete", async (req, res) => {

    try {
        // res.json(req.query)

        let {q} = req.query;
        let {limit} = req.query;
        let {offset} = req.query;

        let sql = `SELECT * FROM branches WHERE branch ILIKE $1 ORDER BY ifsc LIMIT $2 OFFSET $3`;
        let values = [`%${q}%`, `${limit}`, `${offset}`];

        // THIS IS WHERE I AM MESSING UP PROBABLY
        
        let branch = await pool.query(sql,values);
        // console.log({q}, {limit}, {offset});
        // const branch = await pool.query("SELECT * FROM branches WHERE");

        res.json(branch.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/api/branches", async (req, res) => {

    try {
        // res.json(req.query)

        let {q} = req.query;
        let {limit} = req.query;
        let {offset} = req.query;

        let sql = `SELECT * FROM branches WHERE 
        ifsc ILIKE $1 OR
        branch ILIKE $1 OR
        address ILIKE $1 OR
        city ILIKE $1 OR
        district ILIKE $1 OR
        state ILIKE $1
        ORDER BY ifsc
        LIMIT $2 OFFSET $3`;

        let values = [`%${q}%`, `${limit}`, `${offset}`];

        let branch = await pool.query(sql,values);
        
        res.json(branch.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(5000, () => {
    console.log("Listening on port 5000");
})