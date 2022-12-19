// Web workers:
// additional thread in javascript to run parallel with main thread to offload heavy computational work.(no DOM manipulation).
// new Worker() to create worker and onmessage to send events between main thread and worker thread.
const worker = new Worker('worker.js');

// Web socket: WS protocol
// full-duplex, TCP/IP, two way connection is established after a handshake.
// Real-time messages, notification, game scoreboard.
// we have events like on connection, on message... e.t.c

// WebRTC:
// open protocal, supports real time communication
// e.g: audio, video

// Broadcast API:
// communication between tabs and windows.
const bc = new BroadcastChannel("MsgTabSync")
bc.addEventListner("message", e => console.log(e));
bs.postMessage("Yo man");

// SSL:
// Secure Sockets Layer. It's the standard technology for keeping an internet connection secure and safeguarding any sensitive data between server and client.
// Now a days its standard for apps to have SSL. use HTTPS and default port is 443.

// SEO:
// Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines.

// ASO:
// App store optimization is the process of increasing an app in an app store, with the objective of increasing organic app downloads.

// scripting vs programming::
// programming -> compiled, platform dependent, less secure.
// scripting -> subset of programming languages, not require any pre-compilation, interpreted, platform independent, more secure.

// Arguments vs Parameters::
// function pass -> arguments
// function gets -> parameters

// Interpreter::
// line by line, Fast

// Compiler::
// compiled whole code first and generate optimized version of code.

// Symentic tags::
// Clearly describe meaning in a human and machine-readable way. Best for SEO and assecibility.
// section, article, aside, header, footer...

// Tree shaking::
// removal of dead code.
// It relies on the import and export statements to detect if code modules are used or not.
// firebase example => new sdk we only import what we have to use this results removing dead code.
// if we are using 1 lodash then 1 should remained in build.
// sideEffect: false.

// Webpack config::
// Webpack is a static module bundler for modern JavaScript applications.
// webpack.config.js => make settings for how build is made.
// entry, output, pulgins, rules.

// Git::
// distributed, version control system, share and track code among developers. 

// Shadow DOM::
// The Shadow DOM is a browser technology designed primarily for scoping variables and CSS in web components.

// Internationalization:: (i18n)
// Adapting of a web site or web application to different languages, regional differences, and technical requirements 
// for different regions and countries.

// Asseciability::
// Making sites useable for as much users possible.
// People with disabilities. visual disability. screen readers.
// 1. Semantic HTML.
// 2. alt image text.
// 3. Design usable focus states.
// 4. Color contrast and font size.
// 5. Aria labels. 


// How browser works::
// Browser components => user interface, browser engine, rendering engine (networking, JS interprater).
// How rendering engine works => 
// parse : prse html, css and js. DOM trees
// render tree
// layout
// paint

// append VS appendChild::
// .append() => add an element in form of a Node object or a DOMString (basically means text).
// .appendChild() => appeds only node elements not strings.
const parent = document.createElement('div');
parent.appendChild('Appending Text');  // Cause error in appendChild().

// CORS::

// http methods::

// http methods status::

// Web security::