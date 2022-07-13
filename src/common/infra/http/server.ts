import 'reflect-metadata';
import express from 'express';

import '../../infra/typeorm';

const app = express();

app.listen(3333, () => console.log("Service running at port 3333"));
