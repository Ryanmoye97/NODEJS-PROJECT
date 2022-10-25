import fs from "fs";
import axios from "axios";
import express from "express";

const app = express();

app.get("/", (req, res) => {
    fs.readFile("./data.json", (err, data) => {
        if (err) return err;
        res.json(JSON.parse(data));
    });
});

app.listen(4000, (err) => {
    if (err) return err;
    console.log('running on port 4000...');
});