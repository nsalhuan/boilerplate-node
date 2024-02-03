import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

app.use(bodyParser.json({ strict: false }));

app.get('/', (req, res) => {
  console.log(req.body);
  res.status(200).json({ success: true });
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.status(200).json({ success: true });
});

app.listen(PORT, () => {
  console.log('Listening on port: ', PORT);
});
