import colors from "colors";

// export function corsOn(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// }

export function errorHandler(err, req, res, next) {
    try {
        next()
    } catch (e) {
        res.status(500);
        res.render('error', { error: e.message });
    }
}

export function requestTime(req, res, next) {
    req.requestTime = Date.now();
    next();
}

export function logger(req, res, next) {
    console.log(colors.bgMagenta.black(`Req.time: ${req.requestTime}`));
    next();
}
