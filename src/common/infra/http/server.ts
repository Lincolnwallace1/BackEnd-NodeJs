import express from "express";

// @types/express
const app = express();

// http://localhost:3333/
app.listen(3333, () => console.log("Server started on port 3333"));
