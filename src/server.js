require('dotenv').config();
const app = require('./app');
const modelManager = require('./models');
const controllerManager = require('./controllers');

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    // Inicializa os models primeiro
    await modelManager.initialize({
    });

    // Inicializa os controllers
    controllerManager.initialize();

    // Inicia o servidor
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error('Erro ao inicializar o servidor:', error);
    process.exit(1);
  }
}

startServer();