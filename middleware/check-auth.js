require('dotenv').config();

const jwt = require('jsonwebtoken');

module.exports =  (req, res, next) => {
    try {
        const decoded = jwt.verify(req.body.token, process.env.JWTKU );
        req.userData = decoded;
        next();
    } catch (error) {
        return res.status(404).json({
            message: 'Invalid Token'
        })
    }
}