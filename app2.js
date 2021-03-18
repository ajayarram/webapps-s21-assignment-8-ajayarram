const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<body>')
      res.write('<table>')
      res.write('<tr>            <th> <h4>Location Name </h4></th>            <th> <h4>Time Limit(hrs)</h4> </th>                        <th>  <h4>Amount($)</h4></th>        </tr>')
      res.write('<tr>            <td>Charminar</td>            <td> 7 </td>            <td> 1 </td>        </tr>')
      res.write('<tr>            <td> Golconda</td>            <td> 5 </td>            <td> 2 </td>        </tr>')
      res.write('       <tr>            <td> SalarJung Museum</td>            <td> 8 </td>            <td> 5 </td>        </tr>')
      res.write('        <tr>            <td> Goa</td>            <td> 72 </td>            <td> 300 </td>        </tr>')
    res.write('</table>')
      res.write('Content \n')
      res.write('More content \n') 
      res.end('</body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})