// database/index.js
const mongoose = require('mongoose');

async function connectDB() {
  const {
    MONGO_INITDB_ROOT_USERNAME: user,
    MONGO_INITDB_ROOT_PASSWORD: pass,
    MONGO_PORT: port,
    DB_NAME: db,
    MONGODB_HOST = 'localhost' 
  } = process.env;

  // monta a URI
  const uri = process.env.MONGODB_URI ||
    `mongodb://${user}:${pass}@${MONGODB_HOST}:${port}/${db}?authSource=admin`;

  try {
    console.log('iniciando')
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ Error connecting to MongoDB:', err);
    process.exit(1);
  }
}

module.exports = connectDB;
