
// NodeJS:
// open-source, cross-platform JavaScript run-time environment fo JS. 
// Server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to client. 
// Data intensitive apps. 

// How node works:
// chrome v8 engine. single threaded/non-blocking event loops.

// Why node:
// Fast.
// Fast development.
// eco-system of node package manager.
// event-based model.

// Why not:
// Heavy computational task.

// Where:
// web development, mobile application development, server-side scripting, and creating desktop applications.  microservices
// real-time applications such as chat applications, online gaming, and IoT (Internet of Things) applications. 

// I/O meaning: 
// moving data from one end to other.

// Front-end vs backend::
// client side  -- server side

// NPM:
// node package manager.

// NVM:
// node version manager.

// Modules:

// Database:
// MongoDB - mongoose
// MySql - knex, mysql2, 
// postgress - knex, sequelize

// Web servers:
// Express, Fast

// event-driven programming:
// cause-effect.
// when something happen do something.

// Event Emmiter:

// streams:

// boiler plate web server::
const http = require('http');
const port = 3000;
const requestHandler = (request, response) => {
  console.log(request.url);
  response.end('Hello Node.js Server!');
};
const server = http.createServer(requestHandler);
server.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`);
});

// repl:

// control glow function:

// fork/span:

// Buffer:

// reactor pattern:

// middleware:

// node_env: