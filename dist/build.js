const hterm=returnExports.hterm,lib=returnExports.lib;hterm.defaultStorage=new lib.Storage.Memory;const term=new hterm.Terminal;term.onTerminalReady=function(){const a=term.io.push();a.onVTKeystroke=function(b){console.log(b)},a.sendString=function(b){console.log(b)},a.onTerminalResize=function(){}},term.decorate(document.querySelector("#terminal")),term.installKeyboard(),console.log("%cWelcome to Faux OS - Licensed MIT - view the project at https://git.io/faux\\nWritten by Daniel Ethridge | https://git.io/de\\n%c               ____                   ____   ____\\n              / __/___ _ __ ____ __  / __ \\\\ / __/\\n             / _/ / _ `// // /\\\\ \\\\ / / /_/ /_\\\\ \\\\\\n            /_/   \\\\_,_/ \\\\_,_//_\\\\_\\\\  \\\\____//___/\\n\\n"+`%c
Try changing your javascript debugger's context to one of the web workers.
In this way, you can run code relative to a sandboxed faux process.
Try this (userspace only) - fs.readFile("/dev/dom").then(console.log);
`,"color: #657575","font-size: 1.25em; color: #151515","color: #657575"),console.log(faux);
//# sourceMappingURL=build.js.map
