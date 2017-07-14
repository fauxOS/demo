// Open a new terminal in the #terminal div
const term = new Terminal({});

const container = document.querySelector("#terminal");
// Auto-focus argument set to true
term.open(container, true);

// Pass the input element to faux.console's key listener
faux.console.attachTo(term.textarea);
// Relay writing to the console to this terminal
faux.console.write = str => term.write(str);
