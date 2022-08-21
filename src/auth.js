const UsuarioModel = require('./UsuarioModel');
const AuthUtil = require('./authUtils');
const { Router } = require("express");
const router = Router();

router.post("/login", (req, res) => {
    if (req.body.username && req.body.password) {
        const user = UsuarioModel.getByUsername(req.body.username);
        if (user && user.password === req.body.password) {
            token = AuthUtil.genAuthToken(user.username);
            res.json({token: token, auth: true});
        } else {
            res.status(401).json({error: "Usuário ou senha inválidos"});
        }
    }
})

router.post("/logout", (req, res) => {
    res.json({auth: false, token: null});
});



module.exports = router;