import Vue from "vue";
import Console from "./components/main.vue";

window.cons = new Vue({
  el: "#console",
  render: h => h(Console)
});

// Click anywhere in the console to refocus the on input line
cons.$el.addEventListener("click", () => {
  // Select on the fly, because this element changes often
  document.querySelector("#input").focus();
});


// Pretty welcome banner
console.log("%cWelcome to Faux OS - Licensed MIT - view the project at https://git.io/faux\n\
Written by Daniel Ethridge | https://git.io/de\n"
+
"%c               ____                   ____   ____\n              \/ __\/___ _ __ ____ __  \/ __ \\ \/ __\/\n             \/ _\/ \/ _ `\/\/ \/\/ \/\\ \\ \/ \/ \/_\/ \/_\\ \\\n            \/_\/   \\_,_\/ \\_,_\/\/_\\_\\  \\____\/\/___\/\n\n"
+
`%c
Try changing your javascript debugger's context to one of the web workers.
In this way, you can run code relative to a sandboxed faux process.
Try this (userspace only) - fs.readFile("/dev/dom").then(console.log);
`, "color: #657575", "font-size: 1.25em; color: #151515", "color: #657575");
console.log(faux);
