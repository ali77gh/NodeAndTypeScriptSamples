
export default class TimeTools {

    static prePath = "/time"

    static timerStartTime :  Date | null = null;

    static init(app) {

        app.get(this.prePath + '/get', (req, res) => {
            res.send(new Date().toString())
        });

        app.post(this.prePath + '/start', (req, res) => {

            this.timerStartTime = new Date()
            res.send("timer started")
        });

        app.post(this.prePath + '/stop', (req, res) => {
            
            this.timerStartTime = null
            res.send("timer stoped")
        });

        app.get(this.prePath + '/getTimer', (req, res) => {
            
            if (this.timerStartTime == null)
                res.send("timer is not started")
            else {

                let diff = new Date().getTime() - this.timerStartTime.getTime() // ms
                diff /= 1000 // to sec

                let diffStr = Math.floor(diff / 60) + ":" + Math.floor(diff%60)

                res.send(diffStr)
             }

                
        });



    }

}