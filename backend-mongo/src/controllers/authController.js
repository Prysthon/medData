const { createUser } = require('../services/userService');
const { authenticate } = require('../services/authService');

async function register(req, res) {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Name, email and password are required.' });
  }

  try {
    const user = await createUser({ name, email, password });
    // não retorno a senha mesmo que hash esteja em select:false
    return res.status(201).json({ id: user._id, name: user.name, email: user.email });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ error: 'Email already registered.' });
    }
    return res.status(500).json({ error: 'Internal server error.' });
  }
}

async function login(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ error: 'Email and password are required.' });
  }
  try {
    const { token } = await authenticate({ email, password });
    return res.json({ token });
  } catch (err) {
    return res
      .status(401)
      .json({ error: 'Invalid email or password.' });
  }
}

module.exports = {
  register,
  login,
};