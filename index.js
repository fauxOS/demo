/*
 * This was taken from https://github.com/sourcelair/xterm.js/blob/master/src/addons/fit/fit.js
 * Fit terminal columns and rows to the dimensions of its DOM element.
 *
 * Approach:
 * 
 *   - Rows: Truncate the division of the terminal parent element height by the terminal row height.
 *
 *   - Columns: Truncate the division of the terminal parent element width by the terminal character
 *   width (apply display: inline at the terminal row and truncate its width with the current
 *   number of columns).
 */
Terminal.prototype.proposeGeometry = function() {
  if (!this.element.parentElement) {
    return;
  }
  const parentStyle = window.getComputedStyle(this.element.parentElement);
  const parentHeight = parseInt(parentStyle.height);
  const parentWidth = Math.max(0, parseInt(parentStyle.width) - 17);

  const elementStyle = window.getComputedStyle(this.element);
  const elementPadHeight =
    parseInt(elementStyle.paddingTop) + parseInt(elementStyle.paddingBottom);
  const elementPadWidth =
    parseInt(elementStyle.paddingRight) + parseInt(elementStyle.paddingLeft);

  const availableHeight = parentHeight - elementPadHeight;
  const availableWidth = parentWidth - elementPadWidth;

  const subjectRow = this.rowContainer.firstElementChild;
  const contentBuffer = subjectRow.innerHTML;
  subjectRow.style.display = "inline";
  subjectRow.innerHTML = "W"; // Common character for measuring width, although on monospace
  const characterWidth = subjectRow.getBoundingClientRect().width;
  subjectRow.style.display = ""; // Revert style before calculating height, since they differ.
  const characterHeight = subjectRow.getBoundingClientRect().height;
  subjectRow.innerHTML = contentBuffer;

  // Round down
  const rows = Math.floor(availableHeight / characterHeight);
  const cols = Math.floor(availableWidth / characterWidth);

  return { cols, rows };
};

Terminal.prototype.fit = function() {
  const { cols, rows } = this.proposeGeometry();
  if (cols && rows) {
    this.resize(cols, rows);
  }
};

// Open a new terminal in the #terminal div
const term = new Terminal({});
const container = document.querySelector("#terminal");
// Auto-focus argument set to true
term.open(container, true);

// Fit the terminal to the current window size
term.fit();
// Fit the terminal geometry on every window resize
addEventListener("resize", () => term.fit());

// Relay key events to faux's console
term.on("key", key => faux.console.handle(key));
term.on("paste", str => {
  for (let i in str) {
    faux.console.handle(str[i]);
  }
});
// Allow the faux console to write to this terminal
faux.console.writeRaw = str => term.write(str);
