
export default class TimeTools {

    static prePath = "/time"

    static timerStartTime :  Date | null = null;

    static init(app) {

        app.get(this.prePath + '/get', (req, res) => {
            res.status(200).send(new Date().toString())
        });

        app.post(this.prePath + '/start', (req, res) => {

            this.timerStartTime = new Date()
            res.status(200).send("timer started")
        });

        app.post(this.prePath + '/stop', (req, res) => {
            
            this.timerStartTime = null
            res.status(200).send("timer stoped")
        });

        app.get(this.prePath + '/getTimer', (req, res) => {
            
            if (this.timerStartTime == null)
                res.status(400).send("timer is not started")
            else {

                let diff = new Date().getTime() - this.timerStartTime.getTime() // ms
                diff /= 1000 // to sec

                let diffStr = Math.floor(diff / 60) + ":" + Math.floor(diff%60)

                res.status(200).send(diffStr)
             }

                
        });



    }

}