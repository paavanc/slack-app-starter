
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const config = require('./config');
const cors = require('cors');
const slack = require('./src/routes/slack');
const info = require('./src/routes/info');
const morganBody = require('morgan-body');
const app = express();
require('dotenv').config({path: config});


app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());

morganBody(app);

app.use(bodyParser.urlencoded({extended: false}));


app.use('/slack', slack);
app.use('/info', info);


// // catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json({message: err.message, error: err});
});

app.listen(function () {
    config.logger.debug("app started on port 8080")
    app.emit("app_started")
})

module.exports = app;
