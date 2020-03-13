
export default class Test{

    static init(app) {
        app.get('/test', (req, res) => {
            res.status(200).send('it works!!! ')
        });
    
    }

}