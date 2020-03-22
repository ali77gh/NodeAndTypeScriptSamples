# NodeAndTypeScriptSamples

List of APIs

1. Tic-toc
2. Todo list
3. Calculator
4. Rick laser scissor (rock paper sscissor rick and morty style)
5. Time tools

# APIs

1. /time
    1. /time/get (get)
    2. /time/start (post)
    3. /time/stop (post)
    4. /time/gettimer (get)

2. /ricklasererscissor
    1. /ricklasererscissor/getinfo (get)
    2. /ricklasererscissor/{rick | laser | scissor} (post)

3. /calculator
    1. /calculator/{sum | minus | divide | multiply}/{firstnumber}/{second number} (post)
    
4. /tictoc
    1. /tictoc/play/{x}/{y} (post) (player in header)
    2. /tictoc/render (get)
    3. /tictoc/reset (post)

4. /todo
    1. /todo/add (post) (name and description in body)
    2. /todo/getall (get)
    3. /todo/remove (post) (todoid in header)
    3. /todo/mark (post) (todoid in header)