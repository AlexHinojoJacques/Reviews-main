const jwt = require("jsonwebtoken");

const secret = "shdjkfg"

const createJWT = (data) => {
    const token = jwt.sign({data}, secret, {expiresIn: "5d",});
    return token;
}

const auth = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return next()
    try {
        const verified = jwt.verify(token, secret);
        if (verified) req.verifiedData = verified.data
        next()
    }
    catch (err) {
        console.log(err);
        return next()
    }
}

module.exports = {auth, createJWT};