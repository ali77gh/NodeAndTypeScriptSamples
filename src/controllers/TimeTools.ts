
export default class TimeTools {

    static init(app) {
        app.get('/test', (req, res) => {
            res.send('it works!!! ')
        });

    }

}