
export default class Test{

    static init(app) {
        app.get('/test', (req, res) => {
            res.send('it works!!! ')
        });
    
    }

}