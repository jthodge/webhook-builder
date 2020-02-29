const express = require('express')
const app = express();
const port = 9000;

app.use(express.json());
app.post('/webhook', (req, res) => {
  const sig = req.header['x-workos-signature'];
  const { data, event } = req.body;

  res.json(req.body);
});

app.listen(port, () => console.log(`localhost:9000/webhook`));
