import express from 'express';

import { AppDataSource } from '../typeorm/index';

AppDataSource.initialize().then(() => {
  const app = express()

  app.use(express.json())

  app.get('/', (req, res) => {
    res.json({ message: 'Database connect' })
  })

  return app.listen(3333, () => console.log("Server started on port 3333"))
})