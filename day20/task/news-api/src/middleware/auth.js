const jwt = require('jsonwebtoken');
const Reporter = require('../models/reporter')
const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const deCode = jwt.verify(token, 'newsApi')
        const reporter = await Reporter.findOne({_id: deCode._id, tokens: token})

        if (!reporter) {
            throw new Error()
        }
        req.reporter = reporter
        req.token = token
        next();
    } catch (e) {

        res.status(500).send({
            error: 'please Authorization'
        })
    }
}

module.exports = auth