var fs = require('fs');

export default class LoggerMiddleware {

    static counter = 0;

    static init(app) {

        app.use((req, res, next) => {

            LoggerMiddleware.counter++

            var logText: String =
                JSON.stringify(req.headers) +
                " at : " + new Date() +
                " counter : " + LoggerMiddleware.counter +
                "\n";

            
            fs.appendFile('logs.log', logText, function (err) {
                if (err) throw err;
                //console.log(logText);
            });
            next()
        })

    }
}