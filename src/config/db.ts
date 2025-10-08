import mongoose from 'mongoose'; // Importamos la librería mongoose para la conexión con MongoDB
import colors from 'colors';


export const connectDB = async () => { // Función para conectar a MongoDB
    try {
        const {connection} = await mongoose.connect(process.env.MONGO_URI) // Conexión a la base de datos usando la variable de entorno MONGO_URI
        const url = `${connection.host}:${connection.port}` 
        console.log(colors.cyan.bold(`MongoDB Conectado en ${url}`)); 
    } catch (error) {
       console.log(colors.bgRed.white.bold(`Error de conexión: ${error.message}`)); 
       process.exit(1); // Termina la aplicación si falla la conexión
    }
}