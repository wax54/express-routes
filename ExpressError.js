// Usage:
//app.get((req, res, next) =>{
// try{
//  throw new ExpressError('Invalid Password', 403);
// } catch (e){
//   next(e);
// }
//}
//app.use(pageNotFound);
//app.use(expressErrorHandler);

function pageNotFound(req, res, next) {
    return res.status(404).send('404 Page Not Found');
}

function expressErrorHandler(err, req, res, next) {
    const status = err.status || 500;
    const msg = err.msg;
    return res.status(status).json({ result: { status, msg } });
}


class ExpressError extends Error {
    constructor(msg, status) {
        super();
        this.msg = msg;
        this.status = status;
    }
}
module.exports = { ExpressError, expressErrorHandler, pageNotFound };