
export default class RickPaperScissorController{

    static prePath = "/rickpaperscissor"

    static options = ["rick", "laser", "scissor"]

    public static init(app) {

        
        app.post(this.prePath + "/:play", (req, res) => {
            let play = req.params["play"] 
            if (this.options.indexOf(play) == -1) {
                res.status(404).send(
                    "not valid play\n" +
                    "play one of [rick laser scissor]"
                    );
                
            } else {
                let result = this.play(this.randOption(), play)
                
                res.status(200).send(result)
            }
        })

        app.get(this.prePath + "/getinfo", (req, res) => {
            res.status(200).send(
                "------game info-------\n" +
                "rick > scissor\n" +
                "scissor > laser\n" +
                "laser > rick\n" 
            );
        })

    
    }

    private static play(server: string, player: string): string {
        
        let won = ""
        let s = this.options.indexOf(server)
        let p = this.options.indexOf(player)

        if (s == 0 && p == 0) won = "draw"
        if (s == 0 && p == 1) won = "player"
        if (s == 0 && p == 2) won = "server"

        if (s == 1 && p == 0) won = "server"
        if (s == 1 && p == 1) won = "draw"
        if (s == 1 && p == 2) won = "player"

        if (s == 2 && p == 0) won = "player"
        if (s == 2 && p == 1) won = "server"
        if (s == 2 && p == 2) won = "draw"

        return " you: " + player + "\n" +
            " server: " + server + "\n" +
            " won: " + won + "\n"
    }

    private static randOption(): string {
        return this.options[this.randInt(0,2)]
    }  

    private static randInt(min :number, max : number) : number  {
        max++;
        return Math.floor(Math.random() * (max - min) + min);
    }  

}