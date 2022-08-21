const UsuarioModel = require('./UsuarioModel');
const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
    res.json({data: UsuarioModel.getAll()});
});

router.get("/:id", (req, res) => {
    res.json({data: UsuarioModel.getById(req.params.id)});
});


module.exports = router;