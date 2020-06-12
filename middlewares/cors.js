const allowCrossOrigin = (req, res, next) => {
    // res.header("Access-Control-Allow-Origin", 'http://hustmaths.top');
    res.header("Access-Control-Allow-Origin", 'http://localhost:8080/');
    res.header("Access-Control-Allow-Methods", 'GET,POST');
    res.header("Access-Control-Allow-Headers", 'Content-Type');
    next();
}

module.exports = allowCrossOrigin