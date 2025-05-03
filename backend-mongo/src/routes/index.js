const userRouter = require('./auth')
const protectedRouter = require('./protected')

module.exports = {
  userRouter,
  protectedRouter
};