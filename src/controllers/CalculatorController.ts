
export default class CalculatorController{

    static prePath = "/calculator"

    public static init(app) {
        
        
        app.post(this.prePath + "/sum/:pr1/:pr2", (req, res) => {
           this.base(req,res,(pr1 :number,pr2 :number)=>{return pr1+pr2})
        })

        app.post(this.prePath + "/minus/:pr1/:pr2", (req, res) => {
            this.base(req, res, (pr1: number, pr2: number) => { return pr1 - pr2 })
        })

        app.post(this.prePath + "/divide/:pr1/:pr2", (req, res) => {
            this.base(req, res, (pr1: number, pr2: number) => { return pr1 / pr2 })
        })

        app.post(this.prePath + "/multiply/:pr1/:pr2", (req, res) => {
            this.base(req, res, (pr1: number, pr2: number) => { return pr1 * pr2 })
        })

    }

    private static base(req , res,f: Function) {
        
            let pr1 = parseInt(req.params["pr1"])
            let pr2 = parseInt(req.params["pr2"])

            if (isNaN(pr1) || isNaN(pr2))
                res.status(400).send("plz enter number")

            else
                res.status(200).send(pr1.toString() + " + " + pr2.toString() + " = " + f(pr1 , pr2))

        
    }
}