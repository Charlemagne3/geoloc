function validate (req, res, next) {
  const lat = req.body.latitude;
  const long = req.body.longitude;
  const name = req.body.name;
  if (lat && (long === undefined || long === null)) {
    return res.status(400).end('longitude is required if latitude is present');
  }
  if (long && (lat === undefined || lat === null)) {
    return res.status(400).end('latitude is required if longitude is present');
  }
  if (lat && typeof lat !== 'number') {
    return res.status(400).end('latitude must be a number');
  }
  if (long && typeof long !== 'number') {
    return res.status(400).end('longitude must be a number');
  }
  if (name && typeof name !== 'string') {
    return res.status(400).end('name must be a string');
  }
  next();
}
  
module.exports = validate;
