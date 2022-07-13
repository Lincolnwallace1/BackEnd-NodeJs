import 'reflect-metadata';
import express from 'express';

import '../../infra/typeorm';

const app = express();

// http://localhost:3333/
app.listen(3333, () => console.log("Server started on port 3333"));
