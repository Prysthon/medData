// database/index.js
const mongoose = require('mongoose');

async function connectDB() {
  // Puxa todas as possíveis variáveis de ambiente
  const {
    MONGODB_URI,
    MONGO_INITDB_ROOT_USERNAME,
    MONGO_INITDB_ROOT_PASSWORD,
    MONGO_PORT,
    DB_NAME,
    MONGO_HOST
  } = process.env;

  // Se existir URI completa, usa ela
  let uri = MONGODB_URI;

  // Senão, tenta montar a URI local a partir das demais variáveis
  if (!uri) {
    // Validações básicas
    if (!MONGO_INITDB_ROOT_USERNAME || !MONGO_INITDB_ROOT_PASSWORD || !DB_NAME) {
      console.error('❌ Variáveis de conexão não encontradas. Defina MONGODB_URI ou MONGO_INITDB_ROOT_USERNAME, MONGO_INITDB_ROOT_PASSWORD e DB_NAME.');
      process.exit(1);
    }

    const host = MONGO_HOST || 'localhost';
    const port = MONGO_PORT || '27017';

    // Monta a URI no formato: mongodb://user:pass@host:port/dbname?authSource=admin
    uri = `mongodb://${encodeURIComponent(MONGO_INITDB_ROOT_USERNAME)}:${encodeURIComponent(MONGO_INITDB_ROOT_PASSWORD)}@${host}:${port}/${DB_NAME}?authSource=admin`;
  }

  try {
    console.log('🔗 Conectando ao MongoDB em', uri);
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB conectado');
  } catch (err) {
    console.error('❌ Erro ao conectar ao MongoDB:', err);
    process.exit(1);
  }
}

module.exports = connectDB;
