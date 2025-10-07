import colors from 'colors';
import server from './server';

// Puerto donde se ejecutará el servidor
const port = process.env.PORT || 4000;
server.listen(port, () => {
 console.log( colors.bgBlue.magenta.italic(`Servidor funcionando en el puerto: ${port}`) );
});