import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.js";
import productRoutes from "./routes/producto.js";
import fs from "fs";

dotenv.config();

const app = express();
const port = process.env.PORT || 9000;

// middleware
app.use(express.json());
app.use("/api", userRoutes);
app.use("/api", productRoutes);

// middleware para manejar errores
app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).send("Algo salió mal!");
});

// middleware para manejar rutas no encontradas
app.use((req, res) => {
    res.status(404).send("Ruta no encontrada");
});

// routes
app.get("/", (req, res) => {
    res.send("Hola, mundo!");
});

// Iniciar el servidor
app.listen(port, () => console.log("Servidor en línea en el puerto", port));

// // Conectar a MongoDB
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Conectado a la base de datos");
    })
    .catch((error) => {
        console.error("Error de conexión:", error);
    });
