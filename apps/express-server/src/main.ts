import express from 'express';
import client from './contentfulClient';

const app = express();

app.get('/posts', async (req, res) => {
  try {
    const entry = await client.getEntry('y79i4jr83Pt4IjHzkM1Wa')
      .then((entry) => entry)
      .catch(console.error)
    res.json(entry);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
