import express from "express";
import { router } from "./routes";

import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";


const app = express();
const port = 3000;

// Define la configuración de Swagger
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '1.0.0',
            description: 'Documentación de la API de mi proyecto Node.js',
        },
    },
    // Rutas a los archivos con comentarios JSDoc
    apis: ['./src/routes/*.ts'],
};


// Inicializa swagger-jsdoc
const swaggerSpec = swaggerJsdoc(options);

// Agrega la documentación Swagger a tu aplicación Express
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json({ strict: false }));
app.use('/api', router);

async function main() {
    app.listen(port, () => {
        console.log(`Backend Swagger Running in ${port}`);
    });
}

main();