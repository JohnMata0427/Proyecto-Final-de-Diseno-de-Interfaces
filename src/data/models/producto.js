import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    src: {
        type: String,
        required: true,
    },
    categoria: {
        type: String,
        required: true,
    },
    subcategoria: {
        type: String,
        required: true,
    },
    stock: {
        type: Number,
        required: false,
    },
});

export default mongoose.model("Producto", productoSchema);
