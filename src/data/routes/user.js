import express from "express";
import userSchema from "../models/user.js";

const router = express.Router();

router.post("/users", (req, res) => {
    const user = userSchema(req.body);
    user.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.get("/users", (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.get("/users/:id", (req, res) => {
    const { id } = req.params;
    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    userSchema
        .updateOne({ _id: id }, { $set: { name, email, password } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    userSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.post("/users", (req, res) => {
    const user = userSchema(req.body);
    user.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

export default router;
