import express, { Request, Response } from 'express';

const app = express();
const port: number = 3000;

app.get('/status', (req: Request, res: Response) => {
  res.status(200).send('node server is running');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
