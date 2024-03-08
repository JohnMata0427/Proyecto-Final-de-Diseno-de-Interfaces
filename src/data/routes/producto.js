import express from 'express';
import productoSchema from '../models/producto.js';

const router = express.Router();

router.post('/productos', (req, res) => {
    const producto = productoSchema(req.body);
    producto
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
    });

router.get('/productos', (req, res) => {
    productoSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
    });

router.get('/productos/:id', (req, res) => {
    const { id } = req.params;
    productoSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.put('/productos/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, precio, descripcion, src, categoria, subcategoria, stock } = req.body;
    productoSchema
        .updateOne({ id: id }, { $set: { nombre, precio, descripcion, src, categoria, subcategoria, stock } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.delete('/productos/:id', (req, res) => {
    const { id } = req.params;
    productoSchema
        .deleteOne({ id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

export default router;