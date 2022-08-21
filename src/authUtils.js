const jwt = require('jsonwebtoken');

module.exports = {
    //Gera um token de autenticação com o o payload desejado
    genAuthToken: (payload) => {
        payload = { "user": payload }
        return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 60*60*3});
    },
    verifyJWT: (req, res, next) => {
        const token = req.headers['x-access-token'];
        if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });

        jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
            if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
            req.username = decoded.user;
            next();
        });
    }
}

