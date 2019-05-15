const express = require('express');
const validate = require('./lib/validate');
const app = express();
const port = 8000;

const router = express.Router()
router.use(express.json());
router.use(validate);
router.post('/', (req, res) => res.send([]));

app.get('/', (req, res) => res.send(''));
app.use('/api/v0/locations', router)

app.listen(port, () => console.log(`listening on port ${port}`));
