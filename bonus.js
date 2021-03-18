const http = require('http')    //Pull in a useful node package


const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
    http.createServer(            //Creates the response loop
        (req, res) => {               //Anonymous function to handle the request
            console.log("Request recieved")
            // console.log(req.url)
            // Build a fake url so we can get the search parameters using a URL object
            fake_url = "https://fake.com/path" + req.url
            const url = new URL(fake_url)
            if (req.method === 'GET') {

                //   console.log("Look for query parameter data: " + search_params.get("data"))
                const advice = ["Trust no one kill anyone be only one.",
                    "Honesty is the best policy.",
                    "Never give up",
                    "Dont sit like a rock work like a clock",
                    "Believe in yourself.",
                    "Luck favours the brave",
                    "If nothing goes right take left"]
                let index = Math.floor(Math.random() * advice.length)
                // Process the queries here
                res.statusCode = 200      //code for OK
                res.setHeader('Content-Type', 'text/plain')
                res.write(`${advice[index]}`)
                res.end();

            } else {
                console.log("Status 404")
                res.statusCode = 404;
                res.end();
            }

        }
    )

server.listen(port, hostname, () => {   //Start the server
    console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})