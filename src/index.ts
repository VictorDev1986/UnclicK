
import server from './server';

// Puerto donde se ejecutará el servidor
const port = process.env.PORT || 4000;

server.listen(4000, () => {
  console.log('Servidor funcionando en el puerto 4000...');
});