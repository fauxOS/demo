const hterm = returnExports.hterm;
const lib = returnExports.lib;

hterm.defaultStorage = new lib.Storage.Memory();
const term = new hterm.Terminal();

term.onTerminalReady = function() {
  // Create a new terminal IO object and give it the foreground.
  // (The default IO object just prints warning messages about unhandled
  // things to the the JS console.)
  const io = term.io.push();

  io.onVTKeystroke = function(str) {
    console.log(str);
  };

  io.sendString = function(str) {
    console.log(str);
  };

  io.onTerminalResize = function(columns, rows) {
    // React to size changes here.
    // Secure Shell pokes at NaCl, which eventually results in
    // some ioctls on the host.
  };

  // You can call io.push() to foreground a fresh io context, which can
  // be uses to give control of the terminal to something else.  When that
  // thing is complete, should call io.pop() to restore control to the
  // previous io object.
};

term.decorate(document.querySelector("#terminal"));
term.installKeyboard();

// Pretty welcome banner
console.log(
  "%cWelcome to Faux OS - Licensed MIT - view the project at https://git.io/faux\n\
Written by Daniel Ethridge | https://git.io/de\n" +
    "%c               ____                   ____   ____\n              \/ __\/___ _ __ ____ __  \/ __ \\ \/ __\/\n             \/ _\/ \/ _ `\/\/ \/\/ \/\\ \\ \/ \/ \/_\/ \/_\\ \\\n            \/_\/   \\_,_\/ \\_,_\/\/_\\_\\  \\____\/\/___\/\n\n" +
    `%c
Try changing your javascript debugger's context to one of the web workers.
In this way, you can run code relative to a sandboxed faux process.
Try this (userspace only) - fs.readFile("/dev/dom").then(console.log);
`,
  "color: #657575",
  "font-size: 1.25em; color: #151515",
  "color: #657575"
);
console.log(faux);
