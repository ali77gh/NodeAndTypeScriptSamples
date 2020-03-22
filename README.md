# NodeAndTypeScriptSamples

List of APIs

1. Tic-toc
2. Todo list
3. Calculator
4. Rick laser scissor (rock paper sscissor rick and morty style)
5. Time tools

also see <br>
[main class](https://github.com/ali77gh/NodeAndTypeScriptSamples/blob/master/src/App.ts) <br>
[LoggerMiddleware](https://github.com/ali77gh/NodeAndTypeScriptSamples/blob/master/src/modules/LoggerMiddleware.ts)
# APIs

1. [/time](https://github.com/ali77gh/NodeAndTypeScriptSamples/blob/master/src/controllers/TimeToolsController.ts)
    1. /time/get (get)
    2. /time/start (post)
    3. /time/stop (post)
    4. /time/gettimer (get)
    
</br></br>

2. [/ricklasererscissor](https://github.com/ali77gh/NodeAndTypeScriptSamples/blob/master/src/controllers/RickLaserScissorController.ts)
    1. /ricklasererscissor/getinfo (get)
    2. /ricklasererscissor/{rick | laser | scissor} (post)
    
</br></br>

3. [/calculator](https://github.com/ali77gh/NodeAndTypeScriptSamples/blob/master/src/controllers/CalculatorController.ts)
    1. /calculator/{sum | minus | divide | multiply}/{firstnumber}/{second number} (post)
    
</br></br>
    
4. [/tictoc](https://github.com/ali77gh/NodeAndTypeScriptSamples/blob/master/src/controllers/TicTocController.ts)
    1. /tictoc/play/{x}/{y} (post) (player in header)
    2. /tictoc/render (get)
    3. /tictoc/reset (post)
    
</br></br>

5. [/todo](https://github.com/ali77gh/NodeAndTypeScriptSamples/blob/master/src/controllers/TodoController.ts)
    1. /todo/add (post) (name and description in body)
    2. /todo/getall (get)
    3. /todo/remove (post) (todoid in header)
    3. /todo/mark (post) (todoid in header)
