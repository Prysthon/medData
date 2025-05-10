const userRouter = require('./auth')
const protectedRouter = require('./protected')
const doctorRouter = require('./doctor')

module.exports = {
  userRouter,
  protectedRouter,
  doctorRouter
};