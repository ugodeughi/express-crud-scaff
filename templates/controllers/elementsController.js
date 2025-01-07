const index = (req, res) => {
  res.send('List of all elements');
};

const store = (req, res) => {
  res.send('Element created');
};

const show = (req, res) => {
  res.send(`Showing element with id: ${req.params.id}`);
};

const update = (req, res) => {
  res.send(`Updating element with id: ${req.params.id}`);
};

const modify = (req, res) => {
  res.send(`Modifying element with id: ${req.params.id}`);
};

const destroy = (req, res) => {
  res.send(`Deleting element with id: ${req.params.id}`);
};

module.exports = {
  index,
  store,
  show,
  update,
  modify,
  destroy
};