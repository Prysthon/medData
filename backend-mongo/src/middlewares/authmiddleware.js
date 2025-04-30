const jwt = require('jsonwebtoken');

module.exports = function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(401).json({ error: 'No token provided.' });

  const parts = authHeader.split(' ');
  if (parts.length !== 2)
    return res.status(401).json({ error: 'Token error.' });

  const [scheme, token] = parts;
  if (!/^Bearer$/i.test(scheme))
    return res.status(401).json({ error: 'Token malformed.' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch {
    return res.status(401).json({ error: 'Invalid token.' });
  }
};
