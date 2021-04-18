import colors from "colors"

export function errorHandler(err, req, res, next) {
    if(!err) {
        return next();
    }
    res.locals.message = err.message;
    res.status(err.status || 500);
    res.render('error');
    // try {
    //     next()
    // } catch (e) {
    //     res.status(500);
    //     res.render('error', { error: e.message });
    // }
}

export function requestTime(req, res, next) {
    req.requestTime = Date.now();
    next();
}

export function logger(req, res, next) {
    console.log(colors.bgMagenta.black(`Req.time: ${req.requestTime}`));
    next();
}
