
export default class TicTocController {

    static prePath = "/tictoc"

    static matris = null;
    static whoShouldPlay = 'O'

    public static init(app) {

        this.clearMatrix()

        app.post(this.prePath + "/play/:x/:y", (req, res) => {

            let player, x, y

            [player, x, y] = this.getInputs(req)

            let err = this.validation(player, x, y)

            if (err != null)
                res.status(400).send(err)
            else {

                let err = this.play(x, y)
                if (err)
                    res.status(400).send(err)
                else
                    res.status(200).send(this.render())
            }

        })

        app.get(this.prePath + "/render", (req, res) => {
            res.status(200).send(this.render())
        })

        app.post(this.prePath + "/reset", (req, res) => {
            this.clearMatrix()
            res.status(200).send(this.render())
        })

    }

    static play(x: number, y: number): string | null {

        if (this.matris[x][y] == '*')
            this.matris[x][y] = this.whoShouldPlay
        else
            return "cell is not empty"

        this.switchTurn()
        return null
    }

    static switchTurn() {
        if (this.whoShouldPlay == 'O') this.whoShouldPlay = 'X'
        else this.whoShouldPlay = 'O'
    }

    static render(): string {

        let result: string = ""
        result += JSON.stringify(this.matris[0]) + "\n"
        result += JSON.stringify(this.matris[1]) + "\n"
        result += JSON.stringify(this.matris[2]) + "\n"
        result += "\n" + "turn: " + this.whoShouldPlay
        return result
    }

    public static clearMatrix() {
        this.matris =
            [
                ['*', '*', '*'],
                ['*', '*', '*'],
                ['*', '*', '*']
            ]
    }

    public static getInputs(req): [string, number, number] {

        let player: string = req.header('player')
        let x: number = parseInt(req.params["x"])
        let y: number = parseInt(req.params["y"])

        return [player, x, y]
    }

    private static validation(player: string, x: number, y: number): null | string {

        if (player != 'X' && player != 'O') {
            return ("player header should be 'O' or 'X' ")
        }

        if (player != this.whoShouldPlay) {
            return ("its not your turn :(")
        }

        if (isNaN(x) || isNaN(y)) {
            return "x and y should be numbers"
        }

        if (x > 2 || y > 2 || x < 0 || y < 0) {
            return ("x and y params should be between 0 and 2")
        }

        return null
    }

}